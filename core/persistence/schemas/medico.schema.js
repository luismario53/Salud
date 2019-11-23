const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SexoEnum = require("../enums/Sexo.enum");

const MedicoSchema = new Schema({
    nombresMedico: { type: String, required: true, maxlength: 30 },
    apPaternoMedico: { type: String, required: true, maxlength: 30 },
    apMaternoMedico: { type: String, required: true, maxlength: 30 },
    curp: { type: String, required: true, maxlength: 18, minlength: 18 },
    nombreUsuario: { type: String, required: true, maxlength: 50 },
    contraseña: { type: String, required: true, maxlength: 100, minlength: 8 },
    contraseñaBiometrica: { type: String, required: false, maxlength: 100 },
    email: { type: String, required: true, maxlength: 50 },
    telefono: { type: Number, required: false, maxlength: 10, minlength: 10 },
    sexo: { type: String, required: true, enum: SexoEnum.getAll() },
    diaNacimiento: { type: Number, required: true },
    MesNacimiento: { type: Number, required: true },
    añoNacimiento: { type: Number, required: true },
    direccionMedico: { type: String, required: true, maxlength: 50 },
    cedulaProfesional: {
        numeroCedula: { type: Number, required: true, maxlength: 8, minlength: 7 },
        añoExpedicion: { type: Number, required: true, maxlength: 4, minlength: 4, min: 1900, max: 2019 },
        profesion: { type: String, required: true, maxlength: 50 },
        institucion: { type: String, required: true, maxlength: 70 },
        tipo: { type: String, required: true }
    },

}, { timestamps: true });
//asdasd
module.exports = mongoose.model("Medico", MedicoSchema, "Medicos");
