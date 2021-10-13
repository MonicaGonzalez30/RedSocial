const Joi = require('joi');

module.exports = {
    profileUserModel : Joi.object().keys({
        email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
        photo: Joi.string().max(600),
        city: Joi.string().min(4).max(50).required(),
        country: Joi.string().min(1).max(50).required(),
        age: Joi.number().min(17).max(100).required(),
        studies: Joi.string().min(5).max(500).required(),
        languages: Joi.string().min(5).max(500).required(),
        linkedIn: Joi.string().min(5).max(100).required(),
        hobbies: Joi.string().min(5).max(500).required(),
        extraKnowledge: Joi.string().min(5).max(500).required()
    }).with('email',['photo','city','country','age','studies','languages','linkedIn','hobbies','extraKnowledge'])
}