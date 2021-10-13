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

module.exports.createProfile = async (profile) => {
    let response = new userModel();
    let result = await response.createP(profile);
    if(result){
        return "Perfil del usuario creado.";
    } else{
        return "Perfil del usuario no creado.";
    }
}

module.exports.createFeedback = async (feedback) => {
    let response = new userModel();
    let result = await response.createF(feedback);
    if(result){
        return "Feedback para el usuario creado.";
    } else{
        return "Feedback para el usuario no creado.";
    }
}

module.exports.findUser = async (userEmail) => {
    let response = new userModel();
    let result = await response.find(userEmail);
    return result;
}

module.exports.findFeedback = async (idProfile) => {
    let response = new userModel();
    let result = await response.findFeed(idProfile);
    return result;
}