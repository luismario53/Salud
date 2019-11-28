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
        response.status(200).json({
            text: "Sesion iniciada correctamente",
            token: token
        });
    } catch (error) {
        response.status(500).json("Error al iniciar sesion", error);
    }
}

module.exports.get = async function (request, response) {
    try {
        const result = await HospitalDAO.get();
        response.status(200).json(result);
    } catch (err) {
        response.status(500).json("No se encontraron hospitales");
    }
}
