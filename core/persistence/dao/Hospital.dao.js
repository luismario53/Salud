const HospitalModel = require("../schemas/Hospital.schema");
//const bcrypt = require("bcrypt");
//const rounds = 10;
/* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/

/* 
* En esta seccion consulta los hospitales que estan en la base de datos guardados
*/
module.exports.getById = async function (id) {
    const Hospital = await HospitalModel.findById(id);
    return Hospital;
}
/* 
* En esta seccion te muestra si hay hospitales  guardados
*/
module.exports.get = async function () {
    const result = await HospitalModel.find();
    return result;
}
/*  
* En esta seccion te guarda los hospitales
*/
module.exports.save = async function (hospital) {
    //bcrypt.hash(hospital.contraseñaHospital, rounds, function () {
        //hospital.contraseñaHospital = hash;
        //const newHospital = HospitalModel(hospital);
        //const result = newHospital.save();
        //return result;
    //});
}
/* 
* En esta seccion inicias sesion en el hospital 
*/
module.exports.login = async function (nombreUsuarioHospital, contraseñaHospital) {
    //const hospital = await HospitalModel.find({ nombreUsuarioHospital: nombreUsuarioHospital});
    //const match = await bcrypt.compare(contraseñaHospital, hospital[0].contraseñaHospital);
    //if (match) {
        //return hospital;
    //}
    //return "hospital";
}
