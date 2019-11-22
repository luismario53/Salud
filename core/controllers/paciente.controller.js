const PacienteDAO = require("../persistence/dao/Paciente.dao");

module.exports.save = async function(request, response){
    const paciente = request.body;
    try{
        const result = await PacienteDAO.save(paciente);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error creando al paciente");
    }
}

module.exports.get = async function (request, response) {
    try {
        const result = await PacienteDAO.get();
        response.status(200).json(result);
    } catch (err) {
        response.status(500).json("No se encontraron pacientes");
    }
}

module.exports.login = async function(request, response){
    const nombreUsuario = request.body.nombreUsuario;
    const contrasena = request.body.contraseña;
    try {
        const result = await PacienteDAO.login(nombreUsuario, contrasena);
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