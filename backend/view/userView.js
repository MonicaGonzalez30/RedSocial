const userController = require('../controller/userController');
const validation = require('../middleware/validation');

module.exports = async (app) => {
    //Crear usuario
    app.post('/createUser',validation.userValidation,async(req,res) => {
        let user = req.body;
        res.send(await userController.createUser(user));
    });
};