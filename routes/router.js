const express = require("express");
const router = express.Router();

const PacienteController = require("../core/controllers/Paciente.controller");

router.get("/salud/agregarPaciente", PacienteController.save);

module.exports = router;