const express = require("express");
const router = express.Router();

const PacienteController = require("../core/controllers/Paciente.controller");
const MedicoController = require("../core/controllers/Medico.controller");

router.post("/salud/agregarPaciente", PacienteController.save);
router.post("/salud/agregarMedico", MedicoController.save);

module.exports = router;