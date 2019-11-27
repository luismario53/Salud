const HospitalDAO = require("../persistence/dao/Hospital.dao");

module.exports.save = async function (request, response) {
    const hospital = request.body;
    try {
        const result = await HospitalDAO.save(hospital);
        response.status(201).json(result);
    } catch (err) {
        response.status(500).json({
            messaje: "Error creando el hospital",
            err
        });
    }
}

module.exports.get = async function (request, response) {
    try {
        const result = await HospitalDAO.get();
        response.status(200).json(result);
    } catch (err) {
        response.status(500).json("No se encontraron hospitales");
    }
}