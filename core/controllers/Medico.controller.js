const MedicoDAO = require("../persistence/dao/Medico.dao");
const tokensMiddleware = require("../../middlewares/token");

module.exports.save = async function(request, response){
    const medico = request.body;
    try{
        const result = await MedicoDAO.save(medico);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json({
            mensaje: "Error creando al medico",
            err
        });
    }  
}

module.exports.get = async function (request, response) {
    try {
        const result = await MedicoDAO.get();
        response.status(200).json(result);
    } catch (err) {
        response.status(500).json("No se encontraron Medicos");
    }
}

module.exports.login = async function(request, response){
    const nombreUsuario = request.body.username;
    const contrasena = request.body.password;
    try {
        const result = await MedicoDAO.login(nombreUsuario, contrasena);
        const id = result[0]._id.toString();
        const token = tokensMiddleware.generateToken({ id });
        response.status(200).json({
            text: "Sesion iniciada correctamente",
            token: token
        });
    } catch (error) {
        response.status(500).json("Error al iniciar sesion");
    }
}