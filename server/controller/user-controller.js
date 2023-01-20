const User = require("../model/user.js")
const bcryptjs = require("bcryptjs")
const createTokens = require("../utils/createTokens")


// get user 
    const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find()

    } catch (err) {
        return next(err)
    }
    if (!users) {
        return res.status(500).json({ message: "Internal server error" })
    }

    return res.status(200).json({ users })
};


// add user or register user

const addUser = async (req, res, next) => {
    const { name, email, password, role } = req.body;
    console.log(name)
    if (!name && name.trim() == "" && !email && email.trim() == "" && !password && password.length < 6 && !role && role.trim() == "") {
        return res.status(401).json({ message: "invalid data" })
    }

    const hashedPassword = await bcryptjs.hash(password, 10)
    let user;
    try {
        user = new User({
            name, email, password: hashedPassword, role
        })
        user = await user.save()
    } catch (err) {
        return next(err)
    }
    if (!user) {
        return res.status(500).json({ message: "unable to save user" })
    }
    return res.status(201).json({ user })
}



// update user 

const updateUser = async (req, res, next) => {
    const id = req.params.id
    const { name, email, password, role } = req.body;
    if (!name && name.trim() == "" && !email && email.trim() == "" && !password && password.length < 6 && !role && role.trim() == "") {
        return res.status(422).json({ message: "invalid data" })
    }

    let user

    try {
        user = await User.findByIdAndUpdate(id, { name, email, password, role })

    } catch (err) {
        return next(err)
    }
    if (!user) {
        return res.status(500).json({ message: "unable to save user" })
    }
    return res.status(200).json({ message: "user updated successfully", user })
}



// user login 

const userLogin = async (req, res, next) => {
    try {

        const { email, password } = req.body

        console.log(req.body)
        const user = await User.findOne({ email: email })
        if (user) {
            const passwordMatch = await bcryptjs.compare(password, user.password)

            if (passwordMatch) {
                const userResult = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                    type: user.type
                }

                const { accessToken, refreshToken } = await createTokens.createTokens(user)

                const response = {
                    success: true,
                    message: "user loged in successgully..!",
                    accessToken,
                    refreshToken,
                    data: userResult
                }
                res.status(200).json(response)

            } else {
                res.status(401).json({ success: false, message: "wrong credintials" })
            }

        } else {
            res.status(401).json({ success: false, message: "wrong credintials" })
        }

    } catch (err) {
        return next(err)
    }

}


exports.getAllUsers = getAllUsers
exports.addUser = addUser
exports.updateUser = updateUser
exports.userLogin = userLogin