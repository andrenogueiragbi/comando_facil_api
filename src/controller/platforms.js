const Platforms = require('../modal/Platforms');



module.exports = {
    async one(req, res) {

        const { Idplatforms } = req.params;

        console.log(Idplatforms)

        try {

            const platform = await Platforms.findOne({ where: { id: Idplatforms } })



            if (!platform) {
                return res.status(404).send({
                    erro: true,
                    message: 'Types commands list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                data: platform
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed'
            });
        }

    },

    async index(req, res) {


        try {


            const types = await Platforms.findAll({});

            if (types.length == 0) {
                return res.status(404).send({
                    erro: true,
                    message: 'Types commands list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                data: types
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed',
                e
            });
        }

    },

    async store(req, res) {


        const { name, avatar } = req.body;

        if (name) {

            try {

                if (await Platforms.findOne({ where: { name: name } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Types commands already exists',
                    });
                }

                const typesCommandsNew = await Platforms.create({ name, avatar: avatar ? avatar : null });

                return res.status(200).send({
                    erro: false,
                    message: 'Types commands created success',
                    data: typesCommandsNew
                })


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed'
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "name is requeried",
            })

        }
    },

    async update(req, res) {

        const { Idplatforms } = req.params;
        const { name, avatar } = req.body;

        if (Idplatforms && name) {

            try {
                const typeExist = await Platforms.findByPk(Idplatforms);

                if (!typeExist) {
                    return res.status(404).send({
                        erro: true,
                        message: 'Types commands not found for update'
                    });

                }

                if (await Platforms.findOne({ where: { name: name } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Types commands already exists',

                    });
                }

                await Platforms.update({ name: name, avatar: avatar ? avatar : typeExist.avatar }, {
                    where: {
                        id: Idplatforms,
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Types commands update with success"
                });

            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed'
                });

            }


        } else {
            return res.status(400).send({
                erro: true,
                message: "id command and name, is requeried",
            })
        }

    },

    async delete(req, res) {
        const { Idplatforms } = req.params;


        if (Idplatforms) {

            try {

                if (!await Platforms.findOne({ where: { id: Idplatforms } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Types commands does not exist to delete',
                    });
                }

                await Platforms.destroy({
                    where: {
                        id: Idplatforms
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Types commands delete with success",


                });


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed'
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "id Types commands is requeried",
            })

        }

    }

};