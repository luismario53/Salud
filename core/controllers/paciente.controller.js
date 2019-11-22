const UsuarioDAO = require("../persistence/dao/Usuario.dao");

module.exports.save = async function(request, response){
    const usuario = request.body;
    try{
        const result = await UsuarioDAO.save(usuario);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error creando al usuario");
    }
    
}