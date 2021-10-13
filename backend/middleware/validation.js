const Joi = require('joi');
const {userModel} = require('./validationModels/user');
const {loginModel} = require('./validationModels/login');
const {profileUserModel} = require('./validationModels/profileUser');
const {feedbackModel} = require('./validationModels/feedback');

module.exports.userValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, userModel, "Los datos ingresados no son correctos para el registro.")
        return next();
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}

module.exports.loginValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, loginModel, "Los datos ingresados no son correctos para el login.")
        return next();
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}

module.exports.profileUserValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, profileUserModel, "Los datos ingresados no son correctos para el perfil.")
        return next();
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}

module.exports.feedbackValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, feedbackModel, "Los datos ingresados no son correctos para el feedback.")
        return next();
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}