const sequelize = require('../db/conexion');

module.exports = class loginModel {
    constructor(user){
        this.user = user;
    }
    async create (user){
        let result = await sequelize.query("INSERT INTO users ([name],lastNameP,lastNameM,email,[password]) VALUES('" + user.name + "','" + user.lastNameP + "','" + user.lastNameM + "','" + user.email + "','" + user.password + "');");
        return result;
    }
}