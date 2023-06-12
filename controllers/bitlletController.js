const bitlletService = require('../services/bitlletService');

const getOneBitllet = async (req, res) => {
    const { id } = req.params;
    try {
        const bitllet = await bitlletService.getOneBitllet(id);
        res.send({ status: "OK", data: bitllet });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } });
    }
}

const createBitllet = (req, res) => {
    const { body } = req;

    if (
        !body.volId ||
        !body.seientAssignat ||
        !body.id ||
        !body.dniTitular ||
        !body.nomCompletTitular ||
        !body.classe
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    "missing required fields",
            },
        });
    }

    const newBitllet = {
        volId: body.volId,
        seientAssignat: body.seientAssignat,
        id: body.id,
        dniTitular: body.dniTitular,
        nomCompletTitular: body.nomCompletTitular,
        classe: body.classe
    };

    try {
        const bitllet = bitlletService.createBitllet(newBitllet);
        res.send({ status: "OK", data: bitllet });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } });
    }
};

const updateBitllet = async (req, res) => {
    const { body } = req;

    if (!body.id || (!body.volId && !body.seientAssignat && !body.dniTitular && !body.nomCompletTitular && !body.classe)) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    "missing required fields",
            },
        });
    }

    const updatedFields = {};

    if (body.volId) updatedFields.volId = body.volId;
    if (body.seientAssignat) updatedFields.seientAssignat = body.seientAssignat;
    if (body.dniTitular) updatedFields.dniTitular = body.dniTitular;
    if (body.nomCompletTitular) updatedFields.nomCompletTitular = body.nomCompletTitular;
    if (body.classe) updatedFields.classe = body.classe;

    try {
        const bitllet = await bitlletService.updateBitllet(body.id, updatedFields);
        res.send({ status: "OK", data: bitllet });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } });
    }
};

const deleteBitllet = async (req, res) => {
    const { id } = req.params;

    try {
        const bitllet = await bitlletService.deleteBitllet(id);
        res.send({ status: "OK", data: bitllet });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } });
    }
}

const getVolByBitlletId = async (req, res) => {
    const { id } = req.params;
    try {
        const vol = await bitlletService.getVolByBitlletId(id);
        res.send({ status: "OK", data: vol });
    } catch (error) {
        res
            .status(error.status || 500)
            .send({ status: "FAILED", data: { error: error.message || error } });
    }
}

module.exports = {
    getOneBitllet,
    createBitllet,
    updateBitllet,
    deleteBitllet,
    getVolByBitlletId
}