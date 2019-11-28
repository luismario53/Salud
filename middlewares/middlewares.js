const moduloTokens = require("./token");

exports.tokenMiddleware = function (req, res, next) {
    //let token = req.headers["authorization"];
    let token = localStorage.getItem("token");
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
            res.redirect("/login");
        });
    } else {
        res.redirect("/login");
    }
}

exports.tokenGetCitas = async function (req, res, next) {

    let token = localStorage.getItem("token");
    if (token) {
        try {
            await moduloTokens.validateToken(token);
            next();
        } catch (error) {
            res.redirect("/login");
        }
    } else {
        res.status(401).json({
            message: "Token not found"
        });
    }

}