const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
/* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/

/* 
* En esta seccion de la consulta de la  base de datos te crea unn sistema para realizar una cita con sus atributos 
*/
const CitaSchema = new Schema({
    descripcion: { type: String, required: true },
    paciente: { type: ObjectId, ref: "Paciente", required: true },
    medico: { type: ObjectId, ref: "Medico", required: true },
    fecha: { type: Date, required: true },
    diagnostico: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Cita", CitaSchema, "Citas");
