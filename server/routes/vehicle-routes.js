const express = require("express")
const { vehicleRegister, getAllVehicles, addVehicleTimeLog, getAllVehiclesTimeLog, getSingleVehicle } = require("../controller/vehicle-controller")

const router = express.Router()

router.post("/", vehicleRegister)
router.get("/", getAllVehicles)
router.get("/:vno", getSingleVehicle)
router.post("/addvehicletimelog", addVehicleTimeLog)
router.get("/getvehicletimelog", getAllVehiclesTimeLog)




module.exports = router;