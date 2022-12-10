const Platforms = require('../modal/Platforms');
const Commands = require('../modal/Commands');
const Titles = require('../modal/Titles');
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
        description: "Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o Kernel Linux. O núcleo foi desenvolvido pelo programador finlandês Linus Torvalds, inspirado no sistema Minix."
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

const titleLinux = [

    {
        title: 'pwd',
        description: "O pwd é um comando que imprime o nome do diretório local em uma interface de linha de comando. Este comando é encontrado nos sistemas operacionais da família Unix. O equivalente do sistema DOS é o comando cd no OpenVMS utiliza-se show default",
        commnad: [
            {
                description: 'Lista o conteúdo da variável PWD, mesmo se conter links simbólicos',
                commands: "pwd -L",
                tags: 'lista',
                creator: 'andre'
            },
            {
                description: ' Evita todos os links simbólicos',
                commands: "pwd -P",
                tags: 'lista',
                creator: 'andre'
            },
        ]
    },
    {
        title: 'cd',
        description: "Este comando permite ao usuário mudar o diretório de trabalho. A mudança de diretório pode ser feita de forma sequencial (de diretório pai para diretório filho ou vice-versa) ou pode ser feita de forma aleatória (de um diretório qualquer para outro diretório qualquer).",
        commnad: [
            {
                description: 'Para ir para o seu diretório home',
                commands: "cd",
                tags: 'diretório',
                creator: 'andre'
            },
            {
                description: 'Para ir para o diretório raiz do Linux',
                commands: "cd /",
                tags: 'diretório',
                creator: 'andre'
            },

            {
                description: 'Para voltar ao último diretório visitado antes do diretório atual, digite',
                commands: "cd –",
                tags: 'diretório',
                creator: 'andre'
            },
            {
                description: 'Para ir para o diretório pai do diretório atual, digite',
                commands: "cd ..",
                tags: 'diretório',
                creator: 'andre'
            },

        ]
    },
    {
        title: 'ls',
        description: "visualiza todos os arquivos de um diretório",
        commnad: [
            {
                description: 'Para ir para o diretório pai do diretório atual, digite',
                commands: "cd ..",
                tags: 'diretório',
                creator: 'andre'
            },
        ]
    },
    {
        title: 'cat',
        description: "Este comando envia o conteúdo de um ou mais arquivos para a saída padrão ou para um outro arquivo. Portanto, cat conCATena (junta) arquivos.",
        commnad: [
            {
                description: 'Podemos usar o comando cat para exibir os arquivos na tela',
                commands: "cat teste1 teste2",
                tags: 'ler',
                creator: 'andre'
            },
            {
                description: 'Para concatenar vários arquivos e colocar o resultado em um outro arquivo deve-se usar o redirecionador de saída >',
                commands: "cat arq1 arq2 arq3 > arq_final",
                tags: 'ler',
                creator: 'andre'
            },

        ]
    },
    {
        title: 'cp',
        description: "copia arquivos do diretório atual para uma pasta diferente",
        commnad: [
            {
                description: 'Pgera cópia de segurança se o arquivo de destino já existir',
                commands: "cp -b arq1",
                tags: 'ler',
                creator: 'andre'
            },
        ]
    },
    {
        title: 'mv',
        description: "pode ser usado para mover ou renomear arquivos.",
        commnad: []
    },
    {
        title: 'mkdir',
        description: "cria um novo diretório",
        commnad: []
    },
    {
        title: 'rmdir',
        description: "permite deletar diretórios vazios",
        commnad: []
    },

]

const titleGit = [

    {
        title: 'git init',
        description: "Criar novo repositório",
        commnad: [
            {
                description: 'Criar novo repositório',
                commands: "git init",
                tags: 'diretório',
                creator: 'andre'
            },
        ]

    },
    {
        title: 'git status',
        description: "Verificar estado dos arquivos/diretórios",
        commnad: [
            {
                description: 'Fornecer saída em formato curto',
                commands: "git status -s",
                tags: 'status',
                creator: 'andre'
            },
            {
                description: 'Mostra mais detalhes "detalhados", incluindo as alterações textuais de qualquer',
                commands: "git status -v",
                tags: 'status',
                creator: 'andre'
            },
        ]
    },
    {
        title: 'git add',
        description: "Adicionar arquivo/diretório (staged area)",
        commnad: []
    },
    {
        title: 'git commit',
        description: "Comitar",
        commnad: []
    },
    {
        title: 'git rm',
        description: "Remover arquivo",
        commnad: [
            {
                description: "Remover arquivo",
                commands: 'git rm meu_arquivo.txt',
                tags: 'status',
                creator: 'andre'

            },
            {
                description: "Remover diretório recursivo",
                commands: 'git rm -r diretorio',
                tags: 'status',
                creator: 'andre'

            },
        ]
    },

    {
        title: 'git log',
        description: "Exibir logs",
        commnad: [
            {

                description: "Exibir histórico",
                commands: 'git log',
                tags: 'log',
                creator: 'andre'
            },
            {

                description: "pExibir informações resumidas em uma linha (hash completa e comentário)",
                commands: 'git log --pretty=oneline',
                tags: 'log',
                creator: 'andre'
            },
        ]
    },


]









module.exports = {


    async ckeckType() {



        if ((await Platforms.findAll()).length == 0) {

            for (var { name, avatar, description } of platforms) {
                console.log(`${name}`)
                const resPlatform = await Platforms.create({ name, avatar, description })

                if (name == "Linux") {

                    for (var { title, description, commnad } of titleLinux) {
                        console.log(`${title}`)
                        const resTitle = await Titles.create({ title, description, id_platforms: resPlatform.id })

                        for (var { description, commands, tags, creator } of commnad) {
                            console.log(description, commands, tags, creator)
                            await Commands.create({ description, commands, tags, creator,title_id:resTitle.id })

                        }

                    }


                }

                if (name == "GitHub") {
                    for (var { title, description,commnad } of titleGit) {
                        console.log(`${title}`)
                        const resTitle = await Titles.create({ title, description, id_platforms: resPlatform.id })

                        for (var { description, commands, tags, creator } of commnad) {

                            console.log(description, commands, tags, creator)

                            await Commands.create({ description, commands, tags, creator,title_id:resTitle.id })

                        }
                    }


                }

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


