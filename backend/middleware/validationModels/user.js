const Joi = require('joi');

module.exports = {
    userModel : Joi.object().keys({
        name: Joi.string().min(1).max(50).required(),
        lastNameP: Joi.string().min(1).max(50).required(),
        lastNameM: Joi.string().min(1).max(50).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
        password: Joi.string().min(8).max(50).required()
    }).with('name',['lastNameP','lastNameM','email','password'])
}