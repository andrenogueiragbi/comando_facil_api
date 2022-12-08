const Platforms = require('../modal/Platforms');
const User = require('../modal/User');


const platforms = [

    {
        name: 'Docker',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
        description: "description"
    },
    {
        name: 'Python',
        avatar: 'https://cdn-icons-png.flaticon.com/512/1822/1822899.png',
        description: "description"
    },
    {
        name: 'Linux',
        avatar: 'https://cdn-icons-png.flaticon.com/512/6124/6124995.png',
        description: "description"
    },
    {
        name: 'Windows',
        avatar: 'https://cdn-icons-png.flaticon.com/512/732/732225.png',
        description: "description"
    },
    {
        name: 'GitHub', avatar: 'https://cdn-icons-png.flaticon.com/512/4926/4926624.png',
        description: "description"
    },
    {
        name: 'Mysql',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
        description: "description"
    },
    {
        name: 'PHP',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
        description: "description"
    },
    {
        name: 'Java Script',
        avatar: 'https://cdn-icons-png.flaticon.com/512/721/721671.png',
        description: "description"
    },
    {
        name: 'Outros',
        avatar: 'https://cdn-icons-png.flaticon.com/512/685/685389.png',
        description: "description"
    },



]




module.exports = {


    async ckeckType() {



        if ((await Platforms.findAll()).length == 0) {

            for (var { name, avatar,description } of platforms) {
                console.log(`${name}`)
                await Platforms.create({ name, avatar ,description})

            }

        }
        return true


    },
    async ckeckUser() {

        if ((await User.findAll()).length == 0) {
            console.log(`Insert data user Administrador\n`)
            await User.create({ name: "Administrador", password: "admin", email: "admin@admin", level: 2, company: "Start" })

        }
        return true
    }

}

/*
Docker	https://cdn-icons-png.flaticon.com/512/5969/5969059.png
Python	https://cdn-icons-png.flaticon.com/512/1822/1822899.png
Linux	https://cdn-icons-png.flaticon.com/512/6124/6124995.png
Windows	https://cdn-icons-png.flaticon.com/512/732/732225.png
GitHub	https://cdn-icons-png.flaticon.com/512/4926/4926624.png
Mysql	https://cdn-icons-png.flaticon.com/512/5968/5968313.png
PHP	https://cdn-icons-png.flaticon.com/512/5968/5968332.png
Java Script	https://cdn-icons-png.flaticon.com/512/721/721671.png
Outros	https://cdn-icons-png.flaticon.com/512/685/685389.png
 */


