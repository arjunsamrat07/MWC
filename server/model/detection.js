const mongoose = require("mongoose")
const Schema = mongoose.Schema

const detectionSchema = new Schema({
    detection: {
        type: String,
        required: true
    },

    detectionTime: {
        type: Date,
        default:new Date().getTime(),
        required: true,
    }
})

module.exports = mongoose.model("detection", detectionSchema)
