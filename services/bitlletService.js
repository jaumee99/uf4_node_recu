const Bitllet = require('../database/bitllet');

const getOneBitllet = (id) => {
    return new Promise((resolve, reject) => {
    try {
        const bitllet = Bitllet.getOneBitllet(id);
        resolve(bitllet);
    } catch (error) {
        reject(error);
    }
    });
}

const createBitllet = (newBitllet) => {
    const bitlletToCreate = {
        ...newBitllet,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }
    try {
        const bitllet = Bitllet.createBitllet(bitlletToCreate);
        return bitllet;
    } catch (error) {
        throw error;
    }
}

const updateBitllet = (id, bitlletToUpdate) => {
    try {
        const volUpdated = Bitllet.updateBitllet(id, bitlletToUpdate);
        return volUpdated;
    } catch (error) {
        throw error;
    }
}

const deleteBitllet = (id) => {
    try {
        const bitllet = Bitllet.deleteBitllet(id);
        return bitllet;
    } catch (error) {
        throw error;
    }
}

const getVolByBitlletId = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const vol = Bitllet.getVolByBitlletId(id);
            resolve(vol);
        } catch (error) {
            reject(error);
        }
    }
    );
}

module.exports = {
    getOneBitllet,
    createBitllet,
    updateBitllet,
    deleteBitllet,
    getVolByBitlletId
}