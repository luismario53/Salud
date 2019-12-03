const HospitalModel = require("../schemas/Hospital.schema");
const bcrypt = require("bcrypt");
const rounds = 10;

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

module.exports.login = async function (nombreUsuarioHospital, contraseñaHospital) {
    const hospital = await HospitalModel.find({ nombreUsuarioHospital: nombreUsuarioHospital, contraseñaHospital: contraseñaHospital });
    const match = await bcrypt.compare(contraseña, hospital[0].contraseñaHospital);
    if(match){
        return hospital;
    }
    return "hospital";
}