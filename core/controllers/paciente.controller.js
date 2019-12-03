const PacienteDAO = require("../persistence/dao/Paciente.dao");
const tokensMiddleware = require("../../middlewares/token");
const fs = require("fs");
const path = require("path");
const ruta = 'c:/Users/luism/Documents/GitHub/Salud/documentos/';
const rutaUploads = 'c:/Users/luism/Documents/GitHub/Salud/uploads/';


module.exports.save = async function (request, response) {
    const paciente = request.body;
    try {
        const result = await PacienteDAO.save(paciente);
        response.redirect('/login');
        //response.redirect('/usuarios');
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
        request.app.locals.mensaje = null;
        response.redirect("/");
    } catch (error) {
        request.app.locals.mensaje = "El usuario o contraseña es incorrecto"
        response.redirect("/login");
    }
}

module.exports.logout = async function (request, response) {
    await localStorage.removeItem("token");
    response.redirect("/login");
}

module.exports.getById = async function (request, response) {
    const token = localStorage.getItem("token");
    const id = await tokensMiddleware.validateToken(token);
    try {
        const paciente = await PacienteDAO.getById(id.id);
        response.render('perfilPaciente', { paciente });
    } catch (error) {
        response.status(500).json("No se encontro paciente", error);
    }
}

module.exports.subirDocumento = async function (request, response) {
    console.log(request.body);
    const token = localStorage.getItem("token");
    const idPaciente = await tokensMiddleware.validateToken(token);
    if (!fs.existsSync(path.join(ruta + idPaciente.id))) {
        fs.mkdirSync(path.join(ruta + idPaciente.id));
    }
    fs.createReadStream(path.join(rutaUploads + request.body.documento)).pipe(fs.createWriteStream(path.join(ruta + idPaciente.id + '/' + request.body.documento)));
    fs.unlink(path.join(rutaUploads + request.body.documento));
    response.render('perfilPaciente');
}
