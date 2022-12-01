const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/user-routes")
const app = express()
app.use(express.json())
const port = process.env.PORT || 8080


app.use("/users",router)

mongoose.connect("mongodb+srv://mwcadmin:mwcadmin@cluster0.dvg9zni.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(port,()=>console.log("connected and listning on port 8080")))
.catch((err)=>console.log(err))


