const express = require("express")

const { getAllDetections, addDetection } = require("../controller/detection-controller")

const router = express.Router()

router.get("/", getAllDetections)
router.post("/", addDetection)

module.exports = router;