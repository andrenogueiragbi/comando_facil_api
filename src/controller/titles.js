const Titles = require('../modal/Titles');

module.exports = {
    async one(req, res) {

        const { Idtitle } = req.params;

        console.log(Idtitle)

        try {

            const title = await Titles.findOne({ where: { id: Idtitle } })

      

            if (!title) {
                return res.status(404).send({
                    erro: true,
                    message: 'Type title list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                data: title
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed'
            });
        }

    },
    async platform(req, res) {

        const { Idplatform:id } = req.params;


        try {

            const title = await Titles.findAll({ where: { id_platforms: id } })

      
            if (!title) {
                return res.status(404).send({
                    erro: true,
                    message: 'Type title list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                data: title
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed'
            });
        }

    },

    //* refazer *//
    async index(req, res) {

        try {

            const title = await Titles.findAll();

            if (title.length == 0) {
                return res.status(404).send({
                    erro: true,
                    message: 'Types title list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                title
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed'
            });
        }

    },

    async store(req, res) {

        const { title, description,avatar,id_platforms } = req.body;

        if (title && description && id_platforms) {

            console.log(await Titles.findOne({ where: {  title } }))

            
  

            try {

                if (await Titles.findOne({ where: {  title } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Type title already exists',
                    });
                }

                const titleNew = await Titles.create({ title,description,avatar:avatar?avatar:null,id_platforms });

                return res.status(200).send({
                    erro: false,
                    message: 'Types commands created success',
                    data:titleNew
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
                message: "title && description && id_platforms is requeried",
            })

        }
    },

    async update(req, res) {

        const { Idplatforms } = req.params;
        const { name,avatar } = req.body;

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

                await Platforms.update({ name: name, avatar:avatar? avatar: typeExist.avatar  }, {
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