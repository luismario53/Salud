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

module.exports.getCitasByMedico = async function (request, response) {
    const idMedico = request.params["id"];
    try {
        const result = await CitaDAO.getCitasByMedico(idMedico);
        response.status(200).json(result);
    } catch (err) {
        response.status(500).json("No se encontraron citas");
    }
}