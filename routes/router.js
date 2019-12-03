const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../uploads' });
const auth = require("../middlewares/middlewares");

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

router.get("/citas", auth.tokenGetCitas, CitaController.getCitasPaciente);
router.get("/cerrarSesion", auth.pacienteValidacion, PacienteController.logout);
router.post("/crear-cita/nueva-cita", auth.tokenGetCitas, CitaController.save);
//router.post("/subir-documentos", auth.tokenGetCitas, upload.single('documento'), PacienteController.subirDocumento);


//Rutas html

router.get('/perfil-medico', auth.medicoValidacion, CitaController.getCitasMedico);

router.get("/perfil-paciente", auth.pacienteValidacion, PacienteController.getById);

router.get('/login', auth.validarUsuario);

router.get('/', function (req, res) {
    res.redirect('/login');
});

router.get('/login-medico', function (req, res) {
    res.render('loginMedico');
});

router.get('/login-hospital', function (req, res) {
    res.render('loginHospital');
});

router.get('/ver-citas', auth.pacienteValidacion, CitaController.getCitasPaciente);

router.get('/subir-documentos', auth.tokenMiddleware, function (req, res) {
    res.render('subirDocumentos');
});

router.get('/crear-cita', auth.pacienteValidacion, MedicoController.get);

router.get('/registrarse', function (req, res) {
    res.render('registrarse');
});

module.exports = router;