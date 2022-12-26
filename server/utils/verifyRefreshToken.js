const UserToken = require("../model/UserToken")
const jwt = require("jsonwebtoken")


const verifyRefreshToken = (refreshToken) => {

    const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY
    console.log(">>>>>>>", refreshToken)

    return new Promise((resolve, reject) => {
        UserToken.findOne({ token: refreshToken }, (err, doc) => {
            console.log("//////////////11", typeof (UserToken), doc)
            if (!doc)
                return reject({ err: true, message: "Invalid refresh==== token" })

            jwt.verify(refreshToken, privateKey, (error, tokenDetails) => {
                console.log("]]]]]11", tokenDetails)
                if (error)
                    return reject({ err: true, message: "Invalid refresh token" })
                resolve({
                    tokenDetails,
                    error: false,
                    message: "valid refresh token"
                })
            })

        })
    })

}

exports.verifyRefreshToken = verifyRefreshToken

