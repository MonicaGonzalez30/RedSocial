const Joi = require('joi');

module.exports = {
    feedbackModel : Joi.object().keys({
        idProfile: Joi.number().required(),
        comment: Joi.string().min(1).max(300).required()
    }).with('idProfile','comment')
}