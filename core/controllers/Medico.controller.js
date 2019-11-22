const MedicoDAO = require("../persistence/dao/Medico.dao");

module.exports.save = async function(request, response){
    const medico = request.body;
    try{
        const result = await MedicoDAO.save(medico);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error creando al medico");
    }
    
}