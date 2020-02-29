const CitaModel = require("../schemas/Cita.schema");
/* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/

/* 
* En esta seccion de la consulta de la  base de datos te regresa la collecion de los datos de las citas por medio de su id 
*/
module.exports.getById = async function (id) {
    const cita = await CitaModel.findById(id);
    return cita;
}
/* 
* En esta seccion de la consulta de la  base de datos te regresa la collecion de los datos del medico
*/
module.exports.getCitasByMedico = async function (idMedico) {
    const result = await CitaModel.find({ medico: idMedico });
    return result;
}

/* 
* En esta seccion guarda las citas
*/

module.exports.save = async function (cita) {
    const newCita = CitaModel(cita);
    const result = newCita.save();
    return result;
}

/* 
* En esta seccion de la consulta de la  base de datos te regresa las citas y que medico lo esta llevando hacia que paciente
*/

module.exports.getCitas = async function (idMedico) {
    const citas = await CitaModel.find({ $or: [{ medico: idMedico }, { paciente: idMedico }] }).sort({ createdAt: -1 });
    return citas;
}

/* 
* En esta seccion de la consulta de la  base de datos para cancelar la cita
*/
module.exports.cancelarCita = async function (idMedico) {
    const result = await CitaModel.findByIdAndDelete(idMedico);
    return result;
}