const express = require("express")
const { vehicleRegister, getAllVehicles } = require("../controller/vehicle-controller")

const router = express.Router()

router.post("/", vehicleRegister)
router.get("/", getAllVehicles)



module.exports = router;