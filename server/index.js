const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/user-routes")
const detectionRoutes = require("./routes/detection-routes")
const vehicleRoutes = require("./routes/vehicle-routes")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
const dotenv = require('dotenv').config();
const refreshToken = require("./routes/refreshToken")

// const db = require("./models")
// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });


// routes
app.use("/users", router)
app.use("/refreshtoken", refreshToken)
app.use("/detection", detectionRoutes)
app.use("/vehicle", vehicleRoutes)


const dbService = require("./dbservice")


// mysql test connection
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
  .then(() => app.listen(process.env.PORT, () => console.log(`Mongo is connected and listning on port ${process.env.PORT}`)))
  .catch((err) => console.log(err))


