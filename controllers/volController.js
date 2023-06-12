const volService = require('../services/volService');

const getVols = async (req, res) => {
    const { mode } = req.query;
    try {
        const allVols = await volService.getVols({ mode });
        res.send({ status: "OK", data: allVols });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } });
    }
};

const createVol = (req, res) => {
    const { body } = req;

    if (
        !body.id ||
        !body.origen ||
        !body.desti ||
        !body.dataEnlairament ||
        !body.modelAvio ||
        !body.duradaTrajecte
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    "missing required fields",
            },
        });
    }

    const newVol = {
        id: body.id,
        origen: body.origen,
        desti: body.desti,
        dataEnlairament: body.dataEnlairament,
        modelAvio: body.modelAvio,
        duradaTrajecte: body.duradaTrajecte
    };

    try {
        const vol = volService.createVol(newVol);
        res.send({ status: "OK", data: vol });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } });
    }
};

const deleteVol = async (req, res) => {
    const { id } = req.params;
    try {
        const volDeleted = await volService.deleteVol(id);
        res.send({ status: "OK", data: volDeleted });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } });
    }
}

module.exports = {
    getVols,
    createVol,
    deleteVol
};