const CitaDAO = require("../persistence/dao/Cita.dao");

module.exports.save = async function (request, response) {
    const cita = request.body;
    cita.paciente = request.params["id"];
    try {
        const result = await CitaDAO.save(cita);
        response.status(201).json(result);
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

module.exports.getCitasByMedico = async function (request, response) {
    const idMedico = request.params["id"];
    try {
        const result = await CitaDAO.getCitasByMedico(idMedico);
        response.status(200).json(result);
    } catch (err) {
        response.status(500).json("No se encontraron citas");
    }
}
