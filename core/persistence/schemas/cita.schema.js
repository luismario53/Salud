const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const CitaSchema = new Schema({
    descripcion: { type: String, required: true },
    paciente: { type: ObjectId, ref: "Paciente", required: true },
    medico: { type: ObjectId, ref: "Medico", required: true },
    fecha: { type: Date, required: true },
    diagnostico: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Cita", CitaSchema, "Citas");
