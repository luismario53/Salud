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
            next();
        }).catch(err => {
            res.render('index');
            //res.redirect("/login");
        }); 
    } else {
        res.redirect("/login");
    }
}

exports.medicoValidacion = async function (req, res, next) {
    let token = localStorage.getItem("token-medico");
    if (token) {
        try {
            await moduloTokens.validateToken(token);
            next();
        } catch (error) {
            res.redirect("/login");
        }
    } else {
        res.redirect("/login");
    }
}

exports.pacienteValidacion = async function (req, res, next) {
    let token = localStorage.getItem("token-paciente");
    if (token) {
        try {
            await moduloTokens.validateToken(token);
            next();
        } catch (error) {
            res.redirect("/login");
        }
    } else {
        res.redirect('/login');
    }
}

exports.hospitalValidacion = async function (req, res, next) {
    let token = localStorage.getItem("token-hospital");
    if (token) {
        try {
            await moduloTokens.validateToken(token);
            next();
        } catch (error) {
            res.redirect("/login");
        }
    } else {
        res.redirect('/login');
    }
}

exports.validarUsuario = async function (req, res) {

    if (localStorage.getItem("token-paciente") !== null) {
        const token = localStorage.getItem("token-paciente");
        console.log("paciente", token);
        try {
            await moduloTokens.validateToken(token);
            res.redirect("/perfil-paciente");
        } catch (error) {
            res.render('index');
        }

    } else if (localStorage.getItem("token-medico") !== null) {
        const token = localStorage.getItem("token-medico");
        console.log("medico", token);
        try {
            await moduloTokens.validateToken(token);
            res.redirect("/perfil-medico");
        } catch (error) {
            res.render('index');
        }

    } else if (localStorage.getItem("token-hospital") !== null) {
        const token = localStorage.getItem("token-hospital");
        console.log("hospital", token);
        try {
            await moduloTokens.validateToken(token);
            res.redirect("/perfil-hospital");
        } catch (error) {
            res.render('index');
        }
    }
    res.render('index');
}

