const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const SexoEnum = require("../enums/Sexo.enum");

const pacienteSchema = new Schema({
    nombresPaciente: { type: String, required: true, maxlength: 30},
    apPaternoPaciente: { type: String, required: true, maxlength: 30},
    apMaternoPaciente: { type: String, required: true, maxlength: 30},
    curp: { type: String, required: true, maxlength: 18, minlength: 18 },
    nombreUsuario: { type: String, required: true, maxlength: 50},
    contraseña: { type: String, required: true, maxlength: 100, minlength: 8 },
    contraseñaBiometrica: { type: String, required: false, maxlength: 100 },
    email: { type: String, required: true, maxlength: 50},
    telefono: { type: Number, required: false, maxlength: 10, minlength: 10 },
    edad: { type: Number, required: true, maxlength: 3, min: 0, max: 199 },
    sexo: { type: String, required: true, enum: SexoEnum.getAll() },
    fechaDeNacimiento: { type: Date, required: true }
    
}, { timestamps: true });

module.exports = mongoose.model("Paciente", pacienteSchema, "Pacientes");
