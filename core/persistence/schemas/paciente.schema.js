const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const SexoEnum = require("../enums/Sexo.enum");


const PacienteSchema = new Schema({
    nombreUsuario: { type: String, required: true, maxlength: 50},
    contraseña: { type: String, required: true, maxlength: 100, minlength: 8 },
    contraseñaBiometrica: { type: String, required: false, maxlength: 100 },
    email: { type: String, required: true, maxlength: 50},
    telefono: { type: Number, required: false, maxlength: 10, minlength: 10 },
    expediente: {
        nombresPaciente: { type: String, required: true, maxlength: 30},
        apPaternoPaciente: { type: String, required: true, maxlength: 30},
        apMaternoPaciente: { type: String, required: true, maxlength: 30},
        curp: { type: String, required: true, maxlength: 18, minlength: 18 },
        numeroSeguroSocial: { type: Number, required: true, maxlength: 9, minlength: 9},
        sexo: { type: String, required: true, enum: SexoEnum.getAll() },
        fechaDeNacimiento: { type: Date, required: true },
        documentos: [{
            descripcion: {type: String, required: true},
            documentoURL: {type: String, required: true},
            fecha: {type: Date, required: true}
        }]
    }
}, { timestamps: true });

module.exports = mongoose.model("Paciente", PacienteSchema, "Pacientes");
