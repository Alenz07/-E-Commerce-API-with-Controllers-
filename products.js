const express = require("express")
const router = express.Router()
const controller = require("./controller/product")
router.get("/",controller.fetching)
router.post("/",controller.adding)
router.get("/:id",controller.getting)

module.exports = router