const express = require("express")
const UserToken = require("../model/UserToken")
const jwt = require("jsonwebtoken")
const verifyRefreshToken = require("../utils/verifyRefreshToken")

const router = express.Router()

router.post("/", async (req, res) => {
    

    verifyRefreshToken.verifyRefreshToken(req.body.refreshToken).then(({ tokenDetails }) => {

        const payload = { _id: tokenDetails._id, role: tokenDetails.role }
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: "1440m" }
        )
        req.status(200).json({
            error: false,
            accessToken,
            message: "Access token created successfully"
        })
    }).catch((err) => res.status(400).json(err))
})


// Logout 

router.delete("/", async (req, res) => {
    try {

        const userToken = await UserToken.findOne({ token: req.body.refreshToken })
        if (!userToken)
            return res.status(200).json({ error: false, message: "Logged out successfully" })

        await userToken.remove()
        return res.status(200).json({ error: false, message: "Logged out successfully" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: true, message: "Internal server error" })
    }
})


module.exports = router;


