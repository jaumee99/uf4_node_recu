const Vol = require('../database/vol');

const getVols = (filterParams) => {
    return new Promise((resolve, reject) => {
        try {
            const vols = Vol.getVols(filterParams);
            resolve(vols);
        } catch (error) {
            reject(error);
        }
    });
}

const createVol = (newVol) => {
    const volToCreate = {
        ...newVol,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }
    try {
        const vol = Vol.createVol(volToCreate);
        return vol;
    } catch (error) {
        throw error;
    }
}

const deleteVol = (id) => {
    try {
        const volDeleted = Vol.deleteVol(id);
        return volDeleted;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getVols,
    createVol,
    deleteVol
}