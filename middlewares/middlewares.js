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

exports.tokenGetCitas = async function (req, res, next) {
    let token = req.headers["authorization"];
    if (token) {
        try {
            const result = await moduloTokens.validateToken(token);
            req.params["id"] = result.id;
            next();
        } catch (error) {
            res.status(401).json({
                message: "Invalid token",
                error: error
            });
        }

    } else {
        res.status(401).json({
            message: "Token not found"
        });
    }

}