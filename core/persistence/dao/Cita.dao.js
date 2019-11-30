const CitaModel = require("../schemas/Cita.schema");

module.exports.getById = async function (id) {
    const cita = await CitaModel.findById(id);
    return cita;
}

module.exports.getCitasByMedico = async function (idMedico) {
    const result = await CitaModel.find({ medico: idMedico });
    return result;
}

module.exports.save = async function (cita) {
    const newCita = CitaModel(cita);
    const result = newCita.save();
    return result;
}

module.exports.getCitas = async function (idMedico) {
    const citas = await CitaModel.find({ $or: [{ medico: idMedico }, { paciente: idMedico }] });
    console.log(citas);
    return citas;
}

module.exports.cancelarCita = async function (idMedico) {
    const result = await CitaModel.findByIdAndDelete(idMedico);
    return result;
}