const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SexoEnum = require("../enums/Sexo.enum");
/* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/

/* 
* En esta seccion de la consulta de la  base de datos te crea unn sistema para dar de alta un medico con sus atributos 
*/
const MedicoSchema = new Schema({
    nombresMedico: { type: String, required: true, maxlength: 30 },
    apPaternoMedico: { type: String, required: true, maxlength: 30 },
    apMaternoMedico: { type: String, required: true, maxlength: 30 },
    curpMedico: { type: String, required: true, maxlength: 18, minlength: 18 },
    nombreUsuarioMedico: { type: String, required: true, maxlength: 50 },
    contraseñaMedico: { type: String, required: true, maxlength: 100, minlength: 8 },
    contraseñaBiometricaMedico: { type: String, required: false, maxlength: 100 },
    emailMedico: { type: String, required: true, maxlength: 50 },
    telefonoMedico: { type: Number, required: false, maxlength: 10, minlength: 10 },
    sexoMedico: { type: String, required: true, enum: SexoEnum.getAll() },
    diaNacimientoMedico: { type: Number, required: true },
    mesNacimientoMedico: { type: Number, required: true },
    añoNacimientoMedico: { type: Number, required: true },
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
