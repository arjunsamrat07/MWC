const DetectionLog = require('../model/detectionLog');
const Detection = require("../model/detection")
const User = require("../model/user.js")


const addDetectionLog = async (req, res, next) => {

    console.log(req.body)

    let { detection, detectionStatus, user, detectionTime } = req.body;

    let detectionLog;
    try {

        fetchedDetection = await Detection.findById(detection)
        fetcheduser = await User.findById(user);

        console.log("//////////", fetchedDetection)
        console.log("<><><><<><><", fetcheduser)

        let detection1 = {
            detectionId: fetchedDetection._id,
            detectionName: fetchedDetection.detection,
            detectionTime: fetchedDetection.detectionTime
        }

        let user1 = {
            name: fetcheduser.name,
            email: fetcheduser.email,
            password: fetcheduser.password,
            role: fetcheduser.role
        }

        console.log("5555555555",user1)

        // console.log("detectionnnnnnn>>>", detection, detectionStatus, user, detectionTime = new Date().getTime())
        detectionLog = new DetectionLog(detection = detection1, detectionStatus, user = user1, detectionTime)
        console.log("************************", detectionLog)
        detectionLog = await detectionLog.save();

    } catch (error) {
        return next(error);
    }
    if (!detectionLog) {
        return res.status(500).json({ message: "Detection log not saved" })
    }

    return res.status(201).json({ message: "Detection log saved successfully...!!" })
}

exports.addDetectionLog = addDetectionLog;