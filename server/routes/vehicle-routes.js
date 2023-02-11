const express = require("express")
const { vehicleRegister, getAllVehicles, addVehicleTimeLog,
    getAllVehiclesTimeLog,
    updateVehicleOutTime,
    getSingleVehicle } = require("../controller/vehicle-controller")

const router = express.Router()

router.post("/", vehicleRegister)
router.get("/", getAllVehicles)
router.post("/addvehicletimelog", addVehicleTimeLog)
router.get("/vehicletimelog", getAllVehiclesTimeLog)
router.get("/:vno", getSingleVehicle)
router.put("/updateouttime/:vehicleRegNo", updateVehicleOutTime)


module.exports = router;