const HospitalModel = require("../schemas/Hospital.schema");

module.exports.getById = async function(id){
    const Hospital = await HospitalModel.findById(id);
    return Hospital;
}

module.exports.get = async function(){
    const result = await HospitalModel.find();
    return result;
}

module.exports.save = async function (hospital) {
    const newHospital = HospitalModel(hospital);
    const result = newHospital.save();
    return result;
}