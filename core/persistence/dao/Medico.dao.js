const MedicoModel = require("../schemas/Medico.schema");
/* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/

/* 
* En esta seccion de la consulta de la  base de datos te regresa la collecion de los datos de los medicos que hay mediante su id
*/
module.exports.getById = async function (id) {
    const medico = await MedicoModel.findById(id);
    return medico;
}

/* 
* En esta seccion te da la informacion de los medicos  
*/
module.exports.get = async function () {
    const result = await MedicoModel.find();
    return result;
}
/* 
* En esta seccion te guarda la informacion de los medicos 
*/
module.exports.save = async function (medico) {
    /* bcrypt.hash(medico.contraseñaMedico, rounds, function (err, hash) {
        medico.contraseñaMedico = hash;
        const newMedico = MedicoModel(medico);
        const result = newMedico.save();
        return result;
    }); */

}
/* 
* En esta seccion te da la informacion de los medicos para poder iniciar sesion
*/

module.exports.login = async function (nombreUsuario, contraseña) {
    /* const medico = await MedicoModel.find({ nombreUsuarioMedico: nombreUsuario });
    const match = await bcrypt.compare(contraseña, medico[0].contraseñaMedico);
    if (match) {
        return medico;
    }
    return "medico"; */
}