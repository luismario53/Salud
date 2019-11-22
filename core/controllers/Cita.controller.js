const CitaDAO = require("../persistence/dao/Cita.dao");

module.exports.save = async function(request, response){
    const cita = request.body;
    try{
        const result = await CitaDAO.save(cita);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error creando la cita");
    }
    
}