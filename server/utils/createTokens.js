const jwt = require("jsonwebtoken")
const UserToken = require("../model/UserToken")

const createTokens = async (user) => {
    try {
        const payload = { _id: user._id, role: user.role }
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: "15m" }
        )

        const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_PRIVATE_KEY,
            { expiresIn: "1440m" }
        )

        const userToken = await UserToken.findOne({ userId: user._id })
        if (userToken) await userToken.remove()

        await new UserToken({ userId: user._id, token: refreshToken }).save()
        return Promise.resolve({ accessToken, refreshToken })

    } catch (err) {
        return Promise.reject(err)
    }
}

exports.createTokens = createTokens


