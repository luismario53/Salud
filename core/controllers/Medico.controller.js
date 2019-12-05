const MedicoDAO = require("../persistence/dao/Medico.dao");
const tokensMiddleware = require("../../middlewares/token");

module.exports.save = async function (request, response) {
    const medico = request.body;
    try {
        const result = await MedicoDAO.save(medico);
        response.redirect('/login');
    } catch (err) {
        response.status(500).json({
            mensaje: "Error creando al medico",
            err
        });
    }
}

module.exports.get = async function (request, response) {
    try {
        const medicos = await MedicoDAO.get();
        response.render('crearCita', { medicos: medicos });
    } catch (err) {
        response.status(500).json(err);
    }
}

module.exports.login = async function (request, response) {
    const nombreUsuario = request.body.username;
    const contrasena = request.body.password;
    try {
        const result = await MedicoDAO.login(nombreUsuario, contrasena);
        const id = result[0]._id.toString();
        const token = tokensMiddleware.generateToken({ id });
        localStorage.setItem("token-medico", token);
        response.redirect('/perfil-medico');
        request.app.locals.mensaje = null;
    } catch (error) {
        request.app.locals.mensaje = "El usuario o contraseña es incorrecto"
        response.redirect("/login");
    }
}

module.exports.logout = async function (request, response) {
    await localStorage.removeItem("token-medico");
    response.redirect("/login");
}