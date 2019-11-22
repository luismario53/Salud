const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const SexoEnum = require("../enums/Sexo.enum");

const UsuarioSchema = new Schema({
    nombreUsuario: {type:String, required:true, maxlength:30, minlength:5},
    contraseña: {type:String, required: true, maxlength:100, minlength:8},
    nombre: { type:String, required:true, maxlength:50, minlength:1 },
    edad: { type:Number, required:true, maxlength:50, minlength:1 },
    sexo: { type: String, required:true, enum:SexoEnum.getAll()},
    fechaDeNacimiento: {type:Date, required: true},
    
    generosMusicales: {type:[String], required:false},
    generosDePeliculas: {type:[String], required: false},
    amigos: {type: [{type:ObjectId, ref: "Usuario"}], required: false}

}, { timestamps: true });

module.exports= mongoose.model("Usuario", UsuarioSchema, "Usuarios");