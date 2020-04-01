const HospitalModel = require("../schemas/Hospital.schema");
// const bcrypt = require("bcrypt");
// const rounds = 10;

module.exports.getById = async function (id) {
    const Hospital = await HospitalModel.findById(id);
    return Hospital;
}

module.exports.get = async function () {
    const result = await HospitalModel.find();
    return result;
}

module.exports.save = async function (hospital) {
    // bcrypt.hash(hospital.contraseñaHospital, rounds, function () {
    //     hospital.contraseñaHospital = hash;
    //     const newHospital = HospitalModel(hospital);
    //     const result = newHospital.save();
    //     return result;
    // });
}

module.exports.login = async function (nombreUsuarioHospital, contraseñaHospital) {
    // const hospital = await HospitalModel.find({ nombreUsuarioHospital: nombreUsuarioHospital});
    // const match = await bcrypt.compare(contraseñaHospital, hospital[0].contraseñaHospital);
    // if (match) {
    //     //return hospital;
    // }
    // return "hospital";
}
