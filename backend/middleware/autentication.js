const jwt = require('jsonwebtoken');

module.exports.userAutentication = function(req,res,next){
    console.log("Esto es el headers.authorization: "+req.headers.authorization)
    if (req.headers.authorization != undefined) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            let result = jwt.verify(token,process.env.SECRETKEY);
            return next();
        } catch (error) {
            throw new Error("Token invalido");
        }
    } else {
        throw new Error("Token invalido");
    }
}