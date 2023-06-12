const express = require("express");
const router = express.Router();
const bitlletController = require("../../controllers/bitlletController");

router
    .get("/:id", bitlletController.getOneBitllet)
    .post("/", bitlletController.createBitllet)
    .patch("/:id", bitlletController.updateBitllet)
    .delete("/:id", bitlletController.deleteBitllet)
    .get("/:id/vol", bitlletController.getVolByBitlletId)

module.exports = router;