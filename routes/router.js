const express = require("express");
const router = express.Router();
const auth = require("../middlewares/middlewares");

const PacienteController = require("../core/controllers/Paciente.controller");
const MedicoController = require("../core/controllers/Medico.controller");
const CitaController = require("../core/controllers/Cita.controller");
const HospitalController = require("../core/controllers/Hospital.controller");

router.post("/salud/agregarPaciente", PacienteController.save);
router.post("/salud/agregarMedico", MedicoController.save);
router.post("/salud/agregarCita", auth.tokenGetCitas, CitaController.save);
router.post("/salud/agregarHospital",HospitalController.save);
router.delete("/salud/cancelarCita/:id", CitaController.cancelarCita);
router.get("/salud/consultarCitas", auth.tokenGetCitas, CitaController.getCitasByMedico);
router.post("/salud/loginPaciente", PacienteController.login);
router.post("/salud/loginMedico", MedicoController.login);


module.exports = router;