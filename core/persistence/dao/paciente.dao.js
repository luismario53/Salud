const UsuarioModel = require("../schemas/Usuario.schema");

module.exports.getById = async function(id){
    const usuario = await UsuarioModel.findById(id);
    return usuario;
}

module.exports.get = async function(){
    const result = await UsuarioModel.find();
    return result;
}