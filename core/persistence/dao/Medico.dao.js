const MedicoModel = require("../schemas/Medico.schema");

module.exports.getById = async function(id){
    const medico = await MedicoModel.findById(id);
    return medico;
}

module.exports.get = async function(){
    const result = await MedicoModel.find();
    console.log(result);
    return result;
}

module.exports.save = async function (medico) {
    const newMedico = MedicoModel(medico);
    const result = newMedico.save();
    return result;
}

module.exports.login = async function (nombreUsuario, contraseña) {
    const usuario = await MedicoModel.find({ nombreUsuario: nombreUsuario, contraseña: contraseña });
    return usuario;
}