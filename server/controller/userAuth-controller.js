const jwt = require("jsonwebtoken")



const userAuth = (req, res, next) => {

    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(" ")[1]
    console.log(">>>>>>", req.headers)

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY, (err, user) => {
        console.log("userauth token error", err)

        if (err) return res.sendStatus(403)

        req.user = user
        console.log(user)

        res.send(user)


    })

}

exports.userAuth = userAuth