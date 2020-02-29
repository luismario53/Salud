const CitaDAO = require("../persistence/dao/Cita.dao");
const MedicoDAO = require("../persistence/dao/Medico.dao");
const PacienteDAO = require("../persistence/dao/paciente.dao");
const tokensMiddleware = require("../../middlewares/token");
/* 
* @author Luis Sandoval, Julio Nieblas, Jose Arce, fernando Tresierras, oswaldo Caastro
*/ 
  /**
   En esta Seccion es para administrar las citas
 */
module.exports.save = async function (request, response) {
    const token = localStorage.getItem("token-paciente");
    const idPaciente = await tokensMiddleware.validateToken(token);
    const cita = request.body;
    cita.paciente = idPaciente.id;
    try {
        const result = await CitaDAO.save(cita);
        response.redirect("/");
    } catch (err) {
        response.status(500).json("Error creando la cita");
    }

}
 /**
 En esta Seccion es para cancelar la cita realizadas
*/

module.exports.cancelarCita = async function (request, response) {
    const idCita = request.params["id"];

    const result = await CitaDAO.cancelarCita(idCita);
    if (result) {
        response.status(200).json("Se elimino la cita", result._id);
    } else {
        response.status(500).json("No se pudo eliminar las citas");
    }

}
 /**
 En esta Seccion es para mostrar las citas que hizo el medico, y te da la informacion de la citas que tiene pendientes y  de que usuario son
*/
module.exports.getCitasMedico = async function (request, response) {
    const token = localStorage.getItem("token-medico");
    const idUsuario = await tokensMiddleware.validateToken(token);
    try {
        const pacientes = await PacienteDAO.get();
        const medicos = await MedicoDAO.get();
        const citas = await CitaDAO.getCitas(idUsuario.id);
        response.render('perfilMedico', { citas: citas, pacientes: pacientes, medicos: medicos, idUsuario });
    } catch (error) {
        response.status(500).json(error);
    }
}

 /**
 En esta Seccion es para mostrar la  que hizo el paciente, y te da la informacion de la cita y que medico lo atendera
*/

module.exports.getCitasPaciente = async function (request, response) {
    const token = localStorage.getItem("token-paciente");
    const idPaciente = await tokensMiddleware.validateToken(token);
    try {
        const medicos = await MedicoDAO.get();
        const citas = await CitaDAO.getCitas(idPaciente.id);
        response.render('verCitas', { citas: citas, medicos: medicos });
    } catch (error) {
        response.status(500).json(error);
    }
}


