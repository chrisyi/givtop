const   express = require('express')
                , cors = require('cors')
                , bodyParser = require('body-parser')
                , port = 5000
                , app = module.exports = express()
                , massive = require('massive')
                , session = require('express-session')
                , saved_controller = require('./server/saved_controller')

app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(__dirname + '/public'));
const connectionString = "postgres://cy@localhost/givtopDB";
massive(connectionString).then(dbInstance => app.set('db', dbInstance))

app.post('/api/save', saved_controller.create);
app.get('/api/saves', saved_controller.getAll);
app.get('/api/save/:id', saved_controller.getOne);
app.delete('api/save/:id', saved_controller.delete);

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});