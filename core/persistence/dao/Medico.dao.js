const MedicoModel = require("../schemas/medico.schema");

module.exports.getById = async function(id){
    const medico = await medicoModel.findById(id);
    return medico;
}

module.exports.get = async function(){
    const result = await medicoModel.find();
    return result;
}

module.exports.save = async function (medico) {
    const newMedico = MedicoModel(medico);
    const result = newMedico.save();
    return result;
}

module.exports.login = async function (nombreUsuario, contraseña) {
    const usuario = await PacienteModel.find({ nombreUsuario: nombreUsuario, contraseña: contraseña });
    return usuario;
}