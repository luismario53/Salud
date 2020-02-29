const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SexoEnum = require("../enums/Sexo.enum");

/* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/

/* 
* En esta seccion de la consulta de la  base de datos te crea unn sistema para dar de alta un paciente con sus atributos 
*/
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
        diaNacimiento: { type: Number, required: true },
        mesNacimiento: { type: Number, required: true },
        añoNacimiento: { type: Number, required: true },
        documentos: [{
            descripcion: {type: String, required: true},
            documentoURL: {type: String, required: true},
            fechaDocumento: {type: Date, required: true}
        }]
    }
}, { timestamps: true });

module.exports = mongoose.model("Paciente", PacienteSchema, "Pacientes");
