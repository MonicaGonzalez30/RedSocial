const Joi = require('joi');

module.exports = {
    feedbackModel : Joi.object().keys({
        email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
        comment: Joi.string().min(1).max(300).required()
    }).with('email','comment')
}