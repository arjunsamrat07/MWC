const Detection = require("../model/detection")
const express = require('express')

const SocketRouter = (io) => {
    const router = express.Router()

    router.post('/', async (req, res, next) => {
        const { detection, detectionTime } = req.body;
        console.log(req.body)

        io.emit('client', req.body)

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
        return res.status(201).json({ message: "Detection added sucessfull..!!", aDetection })
    })

    return router
}
module.exports = SocketRouter;