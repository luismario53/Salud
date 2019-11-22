const MedicoModel = require("../schemas/medico.schema");

module.exports.getById = async function(id){
    const usuario = await UsuarioModel.findById(id);
    return usuario;
}

module.exports.get = async function(){
    const result = await UsuarioModel.find();
    return result;
}
//unamamadacualquiera

module.exports.save = async function (medico) {
    const newMedico = MedicoModel(medico);
    const result = newMedico.save();
    return result;
}