const controller  = require("./controller/user")

express= require("express")
router = express.Router()

router.get("/",controller.getting)
router.post("/",controller.adding)
router.get("/:id",controller.fetching)
module.exports = router;
