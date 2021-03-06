const PacienteDAO = require("../persistence/dao/Paciente.dao");
const CitaDAO = require("../persistence/dao/Cita.dao");
const MedicoDAO = require("../persistence/dao/Medico.dao");
const tokensMiddleware = require("../../middlewares/token");
const path = require("path");

module.exports.save = async function (request, response) {
    const paciente = request.body;
    try {
        const result = await PacienteDAO.save(paciente);
        response.redirect('/login');
    } catch (err) {
        response.status(500).json({
            message: "Error creando al paciente",
            error: err
        });
    }
}

module.exports.get = async function (request, response) {
    try {
        const pacientes = await PacienteDAO.get();
        response.render('usuarios', { pacientes: pacientes });
    } catch (err) {
        response.status(500).json("No se encontraron pacientes");
    }
}

module.exports.login = async function (request, response) {
    const nombreUsuario = request.body.username;
    const contrasena = request.body.password;
    try {
        const paciente = await PacienteDAO.login(nombreUsuario, contrasena);
        const id = paciente[0]._id.toString();
        const token = tokensMiddleware.generateToken({ id });
        localStorage.setItem("token-paciente", token);
        response.redirect("/perfil-paciente");
        request.app.locals.mensaje = null;
    } catch (error) {
        request.app.locals.mensaje = "El usuario o contraseña es incorrecto"
        response.redirect("/login");
    }
}

module.exports.logout = async function (request, response) {
    await localStorage.removeItem("token-paciente");
    response.redirect("/login");
}

module.exports.getById = async function (request, response) {
    const token = localStorage.getItem("token-paciente");
    const idPaciente = await tokensMiddleware.validateToken(token);
    try {
        const citas = await CitaDAO.getCitas(idPaciente.id);
        const medicos = await MedicoDAO.get();
        const paciente = await PacienteDAO.getById(idPaciente.id);
        response.render('perfilPaciente', { citas: citas, medicos: medicos, paciente });
    } catch (error) {
        response.status(500).json("No se encontro paciente", error);
    }
}

module.exports.getPacienteId = async function (request, response) {
    const idPaciente = request.params["idPaciente"];
    try {
        const citas = await CitaDAO.getCitas(idPaciente);
        const medicos = await MedicoDAO.get();
        const paciente = await PacienteDAO.getById(idPaciente);
        response.render('expedientePaciente', { citas: citas, medicos: medicos, paciente });
    } catch (error) {
        response.status(500).json("No se encontro paciente", error);
    }
}

module.exports.subirDocumento = async function (request, response) {
    const fechaDocumento = request.body.fechaDocumento;
    const descripcion = request.body.descripcion;
    const documento = {
        descripcion: descripcion,
        documentoURL: request.file.filename,
        fechaDocumento: fechaDocumento
    }
    const token = localStorage.getItem("token-paciente");
    const idPaciente = await tokensMiddleware.validateToken(token);
    const result = await PacienteDAO.subirDocumento(idPaciente.id, documento);
    response.redirect('/perfil-paciente');
}

module.exports.configurarMulter = async function (request, response) {
    const token = localStorage.getItem("token-paciente");
    const paciente = await tokensMiddleware.validateToken(token);
    response.render('subirDocumentos', { paciente });
}
