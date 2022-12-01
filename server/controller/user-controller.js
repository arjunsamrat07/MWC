const User = require("../model/User")


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
    if (!name && name.trim() == "" && !email && email.trim() == "" && !password && password.length < 6 && !role && role.trim() == "") {
        return res.status(422).json({ message: "invalid data" })
    }
    let user
    try {
        user = new User({
            name, email, password, role
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


const updateUser =async (req, res, next) => {
    const id = req.params.id
    const { name, email, password, role } = req.body;
    if (!name && name.trim() == "" && !email && email.trim() == "" && !password && password.length < 6 && !role && role.trim() == "") {
        return res.status(422).json({ message: "invalid data" })
    }

    let user

    try{
        user = await User.findByIdAndUpdate(id,{name,email,password,role})

    }catch(err){
        return next(err)
    }
    if (!user) {
        return res.status(500).json({ message: "unable to save user" })
    }
    return res.status(200).json({ message:"user updated successfully" , user })
}

exports.getAllUsers = getAllUsers
exports.addUser = addUser
exports.updateUser = updateUser