const CitaDAO = require("../persistence/dao/Cita.dao");
const MedicoDAO = require("../persistence/dao/Medico.dao");
const tokensMiddleware = require("../../middlewares/token");

module.exports.save = async function (request, response) {
    const token = localStorage.getItem("token");
    const idPaciente = await tokensMiddleware.validateToken(token);
    const cita = request.body;
    cita.paciente = idPaciente.id;
    try {
        const result = await CitaDAO.save(cita);
        response.redirect("/");
    } catch (err) {
        response.status(500).json("Error creando la cita");
    }

}

module.exports.cancelarCita = async function (request, response) {
    const idCita = request.params["id"];

    const result = await CitaDAO.cancelarCita(idCita);
    if (result) {
        response.status(200).json("Se elimino la cita", result._id);
    } else {
        response.status(500).json("No se pudo eliminar las citas");
    }

}

module.exports.getCitas = async function (request, response) {
    const token = localStorage.getItem("token");
    const idPaciente = await tokensMiddleware.validateToken(token);
    try {
        const medicos = await MedicoDAO.get();
        console.log(medicos[0]._id.toString());
        const citas = await CitaDAO.getCitas(idPaciente.id);
        response.render('verCitas', { citas: citas, medicos: medicos });
    } catch (error) {
        response.status(500).json(error);
    }
}

module.exports.getCitasByMedico = async function (request, response) {
    const idMedico = request.params["id"];
    try {
        const result = await CitaDAO.getCitasByMedico(idMedico);
        response.status(200).json(result);
    } catch (err) {
        response.status(500).json("No se encontraron citas");
    }
}
