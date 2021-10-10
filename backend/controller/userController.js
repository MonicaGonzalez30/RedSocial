const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');

module.exports.createUser = async (user) => {
    let response = new userModel();
    let result = await response.create(user);
    if(result){
        return "Usuario creado.";
    } else{
        return "Usuario no creado.";
    }
}