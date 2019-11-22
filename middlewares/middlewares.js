const moduloTokens = require("./tokens");

exports.tokenMiddleware = function (req, res, next) {
    let token = req.headers["authorization"];
    //Convertir a async await
    if (token) {
        moduloTokens.validateToken(token).then(result => {
            if (req.body.paciente !== undefined) {
                req.body.paciente = result.id;
            }
            if (req.body.medico !== undefined) {
                req.body.medico = result.id;
            }
            next();
        }).catch(err => {
            res.status(401).json({
                message: "Invalid token"
            });
        });
    } else {
        res.status(401).json({
            message: "Token not found"
        });
    }
}