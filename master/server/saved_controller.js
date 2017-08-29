module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const {source, url, title} = req.body;

        db.create_save([source, url, title])
        .then(() => res.status(200).json())
        .catch(() => res.status(500).json());
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db')

        db.read_saves()
        .then(response => res.status(200).json(response))
        .catch(() => res.status(500).json())
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const {params} = req;

        db.read_save([params.id])
        .then(response => res.status(200).json(response))
        .catch(() => res.status(500).json())
    },
    delete: (req, res, next) => {
        const db = req.app.get('db')
        const {params} = req;
        console.log(params)
        db.delete_save([params.id])
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))
    },
}