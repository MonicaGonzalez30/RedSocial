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
    app.post('/createProfile',validation.profileUserValidation,autentication.userAutentication,async(req,res) => {
        let profile = req.body;
        let resp = await userController.createProfile(profile);
        console.log(resp);
        res.send(resp);
    });
    //Guardar recomendaciones
    app.post('/createFeedback',validation.feedbackValidation,autentication.userAutentication,async(req,res) => {
        let feedback = req.body;
        let resp = await userController.createFeedback(feedback);
        console.log(resp);
        res.send(resp);
    });
    //Mostrar información del usuario
    app.get('/user/:email',autentication.userAutentication,async(req,res) => {
        let userEmail = req.params.email
        let resp = await userController.findUser(userEmail);
        console.log(resp);
        res.send(resp);
    });
    //Mostrar recomendaciones
    app.get('/userFeedback/:email',autentication.userAutentication,async(req,res) => {
        let userEmail = req.params.email
        let resp = await userController.findFeedback(userEmail);
        console.log(resp);
        res.send(resp);
    });
    //Mostrar usuarios
    app.get('/users',autentication.userAutentication,async(req,res) => {
        let resp = await userController.listUsers();
        console.log(resp);
        res.send(resp);
    });
    //Enviar solicitud de amistad
    app.post('/sendRequestFriendship',autentication.userAutentication,async(req,res) => {
        let request = req.body;
        let resp = await userController.sendReqFriend(request);
        console.log(resp);
        res.send(resp);
    });
};