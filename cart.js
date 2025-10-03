const express = require("express")
const router = express.Router()
const controller = require("./controller/cart")
router.get("/:userid",controller.fetching)
router.post("/:userid",controller.adding)
module.exports = router