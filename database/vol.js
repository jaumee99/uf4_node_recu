var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('avions.sqlite');

const getVols = (filterParams) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM vol", (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        }
        );
    });
}

const createVol = (newVol) => {
    db.run("INSERT INTO vol (id, origen, desti, dataEnlairament, modelAvio, duradaTrajecte) VALUES (?, ?, ?, ?, ?, ?)", 
    [newVol.id, newVol.origen, newVol.desti, newVol.dataEnlairament, newVol.modelAvio, newVol.duradaTrajecte], function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("New vol added");
        }
    }
    );
}

const deleteVol = (id) => {
    db.run("DELETE FROM vol WHERE id = ?", [id], function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Vol deleted");
        }
    }
    );
}

module.exports = {
    getVols,
    createVol,
    deleteVol
}