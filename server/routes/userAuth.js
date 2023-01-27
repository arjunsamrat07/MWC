import { userAuth } from "../controller/userAuth-controller";


const express = require("express")

const router = express.Router()

router.post("/", userAuth)


module.exports = router;
