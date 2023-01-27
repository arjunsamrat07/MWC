const DetectionLog = require("../model/detectionLog")
const Detection = require("../model/detection")
const User = require("../model/user")

const addLogs = async (req, res, next) => {
    const { detectionId, detectionStatus, userId, detectionTime } = req.body;

    let detectionLog;

    try {


        const fetchedDetection = await Detection.findById(detectionId)
        const fetchedUser = await User.findById(userId)


        let detection1 = {
            detectionId: fetchedDetection._id,
            detectionName: fetchedDetection.detection,
            detectionTime: fetchedDetection.detectionTime
        }

        let user1 = {
            name: fetchedUser.name,
            email: fetchedUser.email,
            password: fetchedUser.password,
            role: fetchedUser.role
        }

        detectionLog = new DetectionLog({ detection: detection1, detectionStatus, user: user1, detectionTime })

        detectionLog = await detectionLog.save()

    } catch (err) {
        return next(err)
    }
    if (!detectionLog) {
        return res.status(500).json({ message: "Detection log not saved" })
    }

    return res.status(201).json({ message: "Detection log saved successfully...!!" })

}

exports.addLogs = addLogs