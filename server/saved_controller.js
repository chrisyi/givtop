module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {source, url, title} = req.body;

        dbInstance.create_save([source, url, title])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_response()
        .then(response => res.status(200).send(response))
        .catch(() => res.status(500).send())
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.read_save([params.id])
        .then(response => res.status(200).send(response))
        .catch(() => res.status(500).send())
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params} = req;

        dbInstance.delete_save([params.id])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    },
}