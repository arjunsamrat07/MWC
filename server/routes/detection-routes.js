const express = require("express")

const { getAllDetections, addDetection } = require("../controller/detection-controller")
const { addDetectionLog } = require("../controller/detectionLog-controller")
const { addLogs } = require("../controller/log-controller")

const router = express.Router()

router.get("/", getAllDetections)
router.post("/detectionlog",addLogs)
// router.post("/", addDetection)

module.exports = router;