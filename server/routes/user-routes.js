const express = require("express")
const { getAllUsers, addUser,updateUser,userLogin } = require("../controller/user-controller")

const router = express.Router()

router.get("/", getAllUsers)
router.post("/", addUser)
router.put("/:id", updateUser)

router.post("/login", userLogin)


module.exports = router;