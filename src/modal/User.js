const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../database')
const bcrypt = require('bcryptjs');

const User = connection.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.NUMBER,
    company: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    isLogged: DataTypes.BOOLEAN

}, {

    timestamps: true,
    hooks: {
        beforeCreate: (user) =>{
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password,salt);
        }
    },


}


)



module.exports = User
















/* const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');


class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            level: DataTypes.NUMBER,
            company: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            isLogged: DataTypes.BOOLEAN

        },{
            sequelize,
            hooks: {
                beforeCreate: (user) =>{
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password,salt);
                }
            },

        })
    }
}
module.exports = User */