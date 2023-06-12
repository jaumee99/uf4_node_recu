const express = require("express");
const router = express.Router();
const volController = require("../../controllers/volController");

router
    .get("/", volController.getVols)
    .post("/", volController.createVol)
    .delete("/:id", volController.deleteVol)

module.exports = router;