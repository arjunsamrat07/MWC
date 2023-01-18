const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/user-routes")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
const dotenv = require('dotenv').config();
const refreshToken = require("./routes/refreshToken")

app.use("/users", router)
app.use("/refreshtoken", refreshToken)

const dbService = require("./dbservice")

app.get("/employees", (req, res) => {
  dbService.query("SELECT * FROM employee", (err, rows) => {
    if (err) {
      console.log(err)
    } else {
      return res.send(rows)
    }
  })
})

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(process.env.PORT, () => console.log(`connected and listning on port ${process.env.PORT}`)))
  .catch((err) => console.log(err))


