const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    nombreHospital: { type: String, required: true, maxlength: 30 },
    direccionHospital: { type: String, required: true, maxlength: 50 },
    ciudadHospital: { type: String, required: true, maxlength: 30 },
    rfcHospital: { type: String, required: true, maxlength: 13, minlength: 12 },
    emailHospital: { type: String, required: true, maxlength: 50 },
    telefonoHospital: { type: Number, required: false, maxlength: 10, minlength: 10 },
    directorHospital: { type: String, required: true, maxlength: 50 },
    subdirectorHospital: { type: String, required: true, maxlength: 50 },
    nombreUsuarioHospital: { type: String, required: true, maxlength: 30 },
    contraseñaHospital: { type: String, required: true, maxlength: 100 },
    contraseñaBiometricaHospital: { type: String, required: false, maxlength: 100 },
    numeroPermisoHospital: { type: String, required: true, maxlength: 50 }

}, { timestamps: true });


module.exports = mongoose.model("Hospital", HospitalSchema, "Hospital");
