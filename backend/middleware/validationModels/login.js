const Joi = require('joi');

module.exports = {
    loginModel : Joi.object().keys({
        email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
        password: Joi.string().min(8).max(50).required()
    }).with('email','password')
}