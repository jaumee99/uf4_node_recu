var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('avions.sqlite');

const getOneBitllet = (filterParams) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM bitllet WHERE id = ?", [filterParams], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        }
        );
    });
}

const createBitllet = (newBitllet) => {
    db.run("INSERT INTO bitllet (volId, seientAssignat, id, dniTitular, nomCompletTitular, classe) VALUES (?, ?, ?, ?, ?, ?)",
        [newBitllet.volId, newBitllet.seientAssignat, newBitllet.id, newBitllet.dniTitular, newBitllet.nomCompletTitular, newBitllet.classe], function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("New bitllet added");
        }
    }
    );
}

const updateBitllet = (id, newBitllet) => {
    db.run("UPDATE bitllet SET volId = ?, seientAssignat = ?, dniTitular = ?, nomCompletTitular = ?, classe = ? WHERE id = ?",
        [newBitllet.volId, newBitllet.seientAssignat, newBitllet.dniTitular, newBitllet.nomCompletTitular, newBitllet.classe, id], function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Bitllet updated");
        }
    }
    );
}

const deleteBitllet = (id) => {
    db.run("DELETE FROM bitllet WHERE id = ?", [id], function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Bitllet deleted");
        }
    }
    );
}

const getVolByBitlletId = (id) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM bitllet WHERE volId = ?", [id], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        }
        );
    });
}

module.exports = {
    getOneBitllet,
    createBitllet,
    updateBitllet,
    deleteBitllet,
    getVolByBitlletId
}