const sequelize = require('../db/conexion');

module.exports = class loginModel {
    constructor(login){
        this.login = login;
    }
    async find (user){
        let result = await sequelize.query("SELECT [name],lastNameP,lastNameM,email FROM users WHERE email = '" + user.email + "' AND [password] = '" + user.password + "'");
        if (result[0].length > 0) {
            if (user.user == result[0][0].user) {
                return result[0][0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}