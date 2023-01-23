const Detection = require("../model/detection")


// to get all detections

const getAllDetections = async (req, res, next) => {
    let detections;
    try {
        detections = await Detection.find()
    } catch {
        return next(err)
    }
    if (!detections) {
        return res.status(500).json({ message: "Internal server error" })
    }

    return res.status(200).json({ detections })
}


// to add detections

const addDetection = async (req, res, next) => {
    const { detection, detectionTime } = req.body;
    let aDetection;
    try {
        aDetection = new Detection({
            detection, detectionTime
        })
        aDetection = await aDetection.save()
    } catch (err) {
        return next(err)
    }
    if (!aDetection) {
        return res.status(500).json({ message: "Detection not sent" })
    }
    return res.status(201).json({ message: "Detection added successfully..!!", aDetection })
}

exports.getAllDetections = getAllDetections
exports.addDetection = addDetection