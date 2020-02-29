const PacienteModel = require("../schemas/Paciente.schema");
/* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/

/* 
* En esta seccion de la consulta de la  base de datos te regresa la collecion de los datos de los pacientes que hay mediante su id
*/
module.exports.getById = async function (id) {
    const usuario = await PacienteModel.findById(id);
    return usuario;
}
/* 
* En esta seccion te da la informacion de los pacientes
*/
module.exports.get = async function () {
    const result = await PacienteModel.find();
    return result;
}
/* 
* En esta seccion te guarda la informacion de los pacientes
*/

module.exports.save = async function (paciente) {
    const newPaciente = PacienteModel(paciente);
    const result = await newPaciente.save();
    return result;
}
/* 
* En esta seccion te guarda la informacion de los pacientes para poeder iniciar secion 
*/
module.exports.login = async function (nombreUsuario, contraseña) {
    const usuario = await PacienteModel.find({ nombreUsuario: nombreUsuario, contraseña: contraseña });
    return usuario;
}
/* 
* En esta seccion te guarda la informacion de los pacientes de los diagnosticos y poder subir los documentos
*/

module.exports.subirDocumento = async function (idPaciente, documento) {
    const paciente = await PacienteModel.findById({ _id: idPaciente });
    const documentos = paciente.expediente.documentos;
    documentos.push(documento);
    const result = await PacienteModel.updateOne({ _id: idPaciente }, { $set: { "expediente.documentos": documentos } });
    return result;
}
