const sequelize = require('../db/conexion');

module.exports = class loginModel {
    constructor(user,profile){
        this.user = user;
        this.profile = profile;
    }
    async create (user){
        let result = await sequelize.query("INSERT INTO users ([name],lastNameP,lastNameM,email,[password]) VALUES('" + user.name + "','" + user.lastNameP + "','" + user.lastNameM + "','" + user.email + "','" + user.password + "');");
        return result;
    }
    async createP (profile){
        let result = await sequelize.query("INSERT INTO profiles (email,photo,city,country,age,studies,languages,linkedIn,hobbies,extraKnowledge) VALUES('" + profile.email + "','" + profile.photo + "','" + profile.city + "','" + profile.country + "'," + profile.age + ",'" + profile.studies + "','" + profile.languages + "','" + profile.linkedIn + "','" + profile.hobbies + "','" + profile.extraKnowledge + "');");
        return result;
    }
    async find (userEmail){
        let result = await sequelize.query("SELECT idProfile,[name],lastNameP,lastNameM,photo,city,country,age,studies,languages,linkedIn,hobbies,extraKnowledge FROM users INNER JOIN profiles ON users.email = profiles.email WHERE users.email = '" + userEmail + "';");
        return result[0][0];
    }
}