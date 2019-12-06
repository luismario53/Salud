const PacienteModel = require("../schemas/Paciente.schema");

module.exports.getById = async function (id) {
    const usuario = await PacienteModel.findById(id);
    return usuario;
}

module.exports.get = async function () {
    const result = await PacienteModel.find();
    return result;
}

module.exports.save = async function (paciente) {
    const newPaciente = PacienteModel(paciente);
    const result = await newPaciente.save();
    return result;
}

module.exports.login = async function (nombreUsuario, contraseña) {
    const usuario = await PacienteModel.find({ nombreUsuario: nombreUsuario, contraseña: contraseña });
    return usuario;
}

module.exports.subirDocumento = async function (idPaciente, documento) {
    const paciente = await PacienteModel.findById({ _id: idPaciente });
    const documentos = paciente.expediente.documentos;
    documentos.push(documento);
    const result = await PacienteModel.updateOne({ _id: idPaciente }, { $set: { "expediente.documentos": documentos } });
    return result;
}
