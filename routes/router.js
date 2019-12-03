const express = require("express");
const router = express.Router();
const auth = require("../middlewares/middlewares");
const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads/files'),
    filename: (req, file, cb) => {
        cb(null, (req.params["id"] + file.originalname));
    }
});

const upload = multer({
    storage,
    dest: path.join(__dirname, '/uploads/files')
}).single('documento');

const PacienteController = require("../core/controllers/Paciente.controller");
const MedicoController = require("../core/controllers/Medico.controller");
const CitaController = require("../core/controllers/Cita.controller");
const HospitalController = require("../core/controllers/Hospital.controller");

router.post("/salud/agregarPaciente", PacienteController.save);
router.get("/salud/obtener", PacienteController.get);
router.post("/salud/agregarMedico", MedicoController.save);
router.post("/salud/agregarHospital", HospitalController.save);
router.delete("/salud/cancelarCita/:id", CitaController.cancelarCita);
//router.get("/salud/consultarCitas", auth.tokenGetCitas, CitaController.getCitasByMedico);

router.post("/salud/loginHospital", HospitalController.login);
router.post("/salud/loginPaciente", PacienteController.login);
router.post("/salud/loginMedico", MedicoController.login);

//router.get("/citas", auth.pacienteValidacion, CitaController.getCitasPaciente);

router.get("/cerrar-sesion-paciente", auth.pacienteValidacion, PacienteController.logout);
router.get("/cerrar-sesion-medico", auth.medicoValidacion, MedicoController.logout);
router.get("/cerrar-sesion-hospital", auth.hospitalValidacion, HospitalController.logout);

router.post("/crear-cita/nueva-cita", auth.pacienteValidacion, CitaController.save);
router.post("/subir-documentos/:id", auth.pacienteValidacion, upload, PacienteController.subirDocumento);

router.get("/expediente/:idPaciente", auth.medicoValidacion, PacienteController.getPacienteId);



//Rutas html
router.get("/expediente", function (req, res) {
    res.redirect("perfil-medico");
});

router.get('/perfil-medico', auth.medicoValidacion, CitaController.getCitasMedico);

router.get("/perfil-paciente", auth.pacienteValidacion, PacienteController.getById);

router.get('/login', auth.validarUsuario);

router.get('/', auth.validarUsuario);

router.get('/login-medico', function (req, res) {
    res.render('loginMedico');
});

router.get('/login-hospital', function (req, res) {
    res.render('loginHospital');
});

router.get('/ver-citas', auth.pacienteValidacion, CitaController.getCitasPaciente);

router.get('/subir-documentos', auth.pacienteValidacion, PacienteController.configurarMulter);

router.get('/crear-cita', auth.pacienteValidacion, MedicoController.get);

router.get('/registrarse', function (req, res) {
    res.render('registrarse');
});

module.exports = router;