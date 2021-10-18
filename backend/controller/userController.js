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
    if (result) {
        return result;
    } else {
        return ({'noExiste':"La información del usuario no existe."}); 
    }
}

module.exports.findFeedback = async (userEmail) => {
    let response = new userModel();
    let result = await response.findFeed(userEmail);
    if (result) {
        return result;
    } else {
        return "El feedback no existe."
    }
}

module.exports.listUsers = async () => {
    let response = new userModel();
    let result = await response.list();
    return result;
}

module.exports.sendReqFriend = async (request) => {
    let response = new userModel();
    let result = await response.createFriend(request);
    if(result){
        return "Solicitud de amistad enviada.";
    } else{
        return "Solicitud de amistad no enviada.";
    }
}

module.exports.listFriendships = async (userEmail) => {
    let response = new userModel();
    let result = await response.findFriendships(userEmail);
    if (result) {
        return result;
    } else {
        return "No hay solicitudes de amistad."
    }
}