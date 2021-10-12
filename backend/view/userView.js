const userController = require('../controller/userController');
const validation = require('../middleware/validation');
const autentication = require('../middleware/autentication');

module.exports = async (app) => {
    //Crear usuario
    app.post('/createUser',validation.userValidation,async(req,res) => {
        let user = req.body;
        let resp = await userController.createUser(user);
        console.log(resp);
        res.send(resp);
    });
    //Guardar información del usuario


    //Mostrar información del usuario
    app.get('/user/:email',autentication.userAutentication,async(req,res) => {
        let userEmail = req.params.email
        let resp = await userController.findUser(userEmail);
        console.log(resp);
        res.send(resp);
    });

    //Guardar recomendaciones
};