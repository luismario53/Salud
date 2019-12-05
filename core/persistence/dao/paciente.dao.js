const PacienteModel = require("../schemas/Paciente.schema");
/* const bcrypt = require("bcrypt");
const rounds = 10; */

module.exports.getById = async function (id) {
    const usuario = await PacienteModel.findById(id);
    return usuario;
}

module.exports.get = async function () {
    const result = await PacienteModel.find();
    return result;
}

module.exports.save = async function (paciente) {
    /* bcrypt.hash(paciente.contraseña, rounds, function (err, hash) {
        paciente.contraseña = hash;
        const newPaciente = PacienteModel(paciente);
        const result = newPaciente.save();
        return result;
    }); */
}

module.exports.login = async function (nombreUsuario, contraseña) {
    /* const usuario = await PacienteModel.find({ nombreUsuario: nombreUsuario });
    const match = await bcrypt.compare(contraseña, usuario[0].contraseña);
    if (match) {
        return usuario;
    }
    return "usuario"; */
}

module.exports.subirDocumento = async function (idPaciente, documento) {
    const paciente = await PacienteModel.findById({ _id: idPaciente });
    const documentos = paciente.expediente.documentos;
    documentos.push(documento);
    const result = await PacienteModel.updateOne({ _id: idPaciente }, { $set: { "expediente.documentos": documentos } });
    return result;
}
