const express = require("express")
const { getAllUsers, addUser, updateUser, userLogin } = require("../controller/user-controller")
const { userAuth } = require("../controller/userAuth-controller")

const router = express.Router()

router.get("/", getAllUsers)
router.post("/", addUser)
router.put("/:id", updateUser)
router.post("/userauth",userAuth)
router.post("/login", userLogin)


module.exports = router;