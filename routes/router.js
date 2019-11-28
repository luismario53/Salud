const express = require("express");
const router = express.Router();
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
router.get("/salud/consultarCitas", auth.tokenGetCitas, CitaController.getCitasByMedico);
router.post("/salud/loginPaciente", PacienteController.login);
router.post("/salud/loginMedico", MedicoController.login);
router.get("/perfil", auth.tokenMiddleware, PacienteController.getById);
router.get("/citas", auth.tokenGetCitas, CitaController.getCitas);
router.get("/cerrarSesion", auth.tokenMiddleware, PacienteController.logout);
router.post("/crear-cita/nueva-cita", auth.tokenGetCitas, CitaController.save);

//Rutas html
router.get('/', auth.tokenMiddleware, function (req, res) {
    res.redirect("/perfil");
});

router.get('/login', function (req, res) {
    res.render('index');
});

router.get('/crear-cita', auth.tokenMiddleware, MedicoController.get);

router.get('/usuarios', function (req, res) {
    res.render('usuarios');
});

router.get('/registrarse', function (req, res) {
    res.render('registrarse');
});

module.exports = router;