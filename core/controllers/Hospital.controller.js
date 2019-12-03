const HospitalDAO = require("../persistence/dao/Hospital.dao");
const tokensMiddleware = require("../../middlewares/token");

module.exports.save = async function (request, response) {
    const hospital = request.body;
    try {
        const result = await HospitalDAO.save(hospital);
        response.status(201).json(result);
    } catch (err) {
        response.status(500).json({
            messaje: "Error creando el hospital",
            err
        });
    }
}

module.exports.login = async function (request, response) {
    const nombreUsuario = request.body.username;
    const contrasena = request.body.password;
    try {
        const result = await HospitalDAO.login(nombreUsuario, contrasena);
        const id = result[0]._id.toString();
        const token = tokensMiddleware.generateToken({ id });
        localStorage.setItem("token-hospital", token);
        response.redirect('/hospital');
        request.app.locals.mensaje = null;
    } catch (error) {
        request.app.locals.mensaje = "El usuario o contraseña es incorrecto"
        response.redirect("/login");
    }
}

module.exports.logout = async function (request, response) {
    await localStorage.removeItem("token-hospital");
    response.redirect("/login");
}

module.exports.get = async function (request, response) {
    try {
        const result = await HospitalDAO.get();
        response.status(200).json(result);
    } catch (err) {
        response.status(500).json("No se encontraron hospitales");
    }
}
