const MedicoModel = require("../schemas/Medico.schema");
const bcrypt = require("bcrypt");
const rounds = 10;

module.exports.getById = async function(id){
    const medico = await MedicoModel.findById(id);
    return medico;
}

module.exports.get = async function(){
    const result = await MedicoModel.find();
    return result;
}

module.exports.save = async function (medico) {
    const newMedico = MedicoModel(medico);
    const result = newMedico.save();
    return result;
}

module.exports.login = async function (nombreUsuario, contraseña) {
    const medico = await MedicoModel.find({ nombreUsuarioMedico: nombreUsuario, contraseñaMedico: contraseña });
    const match = await bcrypt.compare(contraseña, medico[0].contraseñaMedico);
    if(match){
        return medico;
    }
    return "medico";
}