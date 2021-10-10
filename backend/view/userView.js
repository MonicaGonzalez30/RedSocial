const userController = require('../controller/userController');
const validation = require('../middleware/validation');

module.exports = async (app) => {
    //Crear usuario
    app.post('/createUser',validation.userValidation,async(req,res) => {
        let user = req.body;
        let resp = await userController.createUser(user);
        console.log(resp);
        res.send(resp);
    });
};