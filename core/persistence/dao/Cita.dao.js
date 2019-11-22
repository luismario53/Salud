const CitaModel = require ("../schemas/cita.schema");

module.exports.getById = async function(id){
    const cita = await CitaModel.findById(id);
    return cita;
}

module.exports.get = async function(){
    const result = await CitaModel.find();
    return result;
}

module.exports.save = async function (cita) {
    const newCita = CitaModel(cita);
    const result = newCita.save();
    return result;
}