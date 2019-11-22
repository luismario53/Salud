const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const citaSchema = new Schema({
    descripcion: {type: String, required: true},
    paciente: {type: ObjectId, ref:"Pacientes", required: true},
    medico: {type: ObjectId, ref:"Medicos", required: true},
    fecha: { type: Date, required: true },
    diagnostico: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Cita", citaSchema, "Citas");
