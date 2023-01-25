const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/user-routes")
const detectionRoutes = require("./routes/detection-routes")
const vehicleRoutes = require("./routes/vehicle-routes")
const cors = require("cors")
const http = require("http")
const refreshToken = require("./routes/refreshToken")
const db = require("./models")
const dbService = require("./dbservice")

const port = process.env.PORT || 3030


const app = express()
let server = http.createServer(app)

app.use(cors())
app.use(express.json())

const dotenv = require('dotenv')
dotenv.config();

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  


// routes
app.use("/users", router)
app.use("/refreshtoken", refreshToken)
app.use("/detection", detectionRoutes)
app.use("/vehicle",vehicleRoutes)




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
  .then((data) => console.log("Mongo Server Connected"))
  .catch((err) => console.log(err))


//  Web-Socket  //
const {Server} = require('socket.io');

const io = new Server(server,{
  cors:{
    origin:'*',
    methods:['GET', 'POST']
  }
})

const SocketRouter = require("./routes/socketRouter")(io)
app.use('/detection/add', SocketRouter)


  
  
  
  
  // let io = socketIO(server)
  // server.listen(3020);
  
  const a = io.on('connection', (socket)=>{
    console.log('user connected userId: ', socket.id);
    
    // socket.broadcast.emit('client',"data")
    socket.on('join_room', (data)=>{
      // socket.broadcast.emit('server',data)
      socket.join(data)
      console.log(socket.rooms)
      
      // toroom()
      console.log(data)
      // socket.broadcast.emit('server',data)
      socket.on('disconnect', ()=>console.log("user Disconnected",socket.id))
    })
  });
  
  
    server.listen(port, () => console.log(`listning on port ${port}`))
    