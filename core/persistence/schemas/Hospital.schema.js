const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    nombre: { type: String, required: true, maxlength: 30 },
    direccion: { type: String, required: true, maxlength: 50 },
    ciudad: { type: String, required: true, maxlength: 30 },
    rfc: { type: String, required: true, maxlength: 13, minlength: 12 },
    email: { type: String, required: true, maxlength: 50 },
    telefono: { type: Number, required: false, maxlength: 10, minlength: 10 },
    director: { type: String, required: true, maxlength: 50 },
    subdirector: { type: String, required: true, maxlength: 50 },
    nombreUsuario: { type: String, required: true, maxlength: 30 },
    contraseña: { type: String, required: true, maxlength: 100 },
    contraseñaBiometrica: { type: String, required: false, maxlength: 100 },
    numeroPermiso: { type: String, required: true, maxlength: 50 }

}, { timestamps: true });


module.exports = mongoose.model("Hospital", HospitalSchema, "Hospital");
