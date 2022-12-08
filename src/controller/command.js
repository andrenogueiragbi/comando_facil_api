const Commands = require('../modal/Commands');

module.exports = {
    async one(req, res) {

        const { Idcommand:id } = req.params;

        console.log(id)

        try {

            const command = await Commands.findOne({ where: { id } })

      

            if (!command) {
                return res.status(404).send({
                    erro: true,
                    message: 'Type command list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                types: command
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

            const commands = await Commands.findAll();

            if (commands.length == 0) {
                return res.status(404).send({
                    erro: true,
                    message: 'Command list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                commands
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed',
            });
        }

    },
    async title(req, res) {

        const { Idtitle:title_id } = req.params;


        try {

            const command = await Commands.findAll({ where: { title_id } })

      
            if (!command) {
                return res.status(404).send({
                    erro: true,
                    message: 'Type command list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                data: command
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed'
            });
        }

    },
    async store(req, res) {


        const { 
          
            description,
            commands,
            tags,
            creator,
            title_id } = req.body;

        if ( description && commands && tags && title_id) {

            try {

                const duplicidade = await Commands.findOne({ where: { commands: commands,title_id:title_id } })


                if (duplicidade) {
                    return res.status(400).send({
                        erro: true,
                        message: 'commands already exists',
                        commands:duplicidade

                    });
                }

                const commandsNew = await Commands.create({ description , commands , tags , title_id , creator });

                return res.status(200).send({
                    erro: false,
                    message: 'commands created success',
                    commands:commandsNew
                })


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed',
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "description && commands && tags && title_id is requeried",
            })

        }
    },



    //refazer//


    async update(req, res) {

        const { IdCommand } = req.params;
        const { type_id, title, description, commands, tags, creator } = req.body;

        if (IdCommand && type_id && title && description && commands && tags && creator) {

            try {
                const userExist = await Commands.findByPk(IdCommand);

                if (!userExist) {
                    return res.status(404).send({
                        erro: true,
                        message: 'command not found for update'
                    });

                }


                duplicidade = await Commands.findOne({ where: { commands: commands } })


                if (duplicidade && duplicidade.dataValues.type_id === type_id) {
                    return res.status(400).send({
                        erro: true,
                        message: 'commands already exists',

                    });
                }

    

                await Commands.update({ type_id, title, description, commands, tags, creator }, {
                    where: {
                        id: IdCommand,
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Commands update with success"
                });

            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: "The server failed",
                });

            }


        } else {
            return res.status(400).send({
                erro: true,
                message: "id command, type_id, title, description commands,tags ,creator , is requeried",
            })
        }

    },

    async delete(req, res) {
        const { IdCommand } = req.params;


        if (IdCommand) {

            try {

                if (!await Commands.findOne({ where: { id: IdCommand } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Commands does not exist to delete',
                    });
                }

                await Commands.destroy({
                    where: {
                        id: IdCommand
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Commands delete with success",


                });


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed',
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "id command is requeried",
            })

        }

    }

};