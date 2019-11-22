const express = require("express");
const router = express.Router();

const PacienteController = require("../core/controllers/Paciente.controller");

router.post("/salud/agregarPaciente", PacienteController.save);

module.exports = router;