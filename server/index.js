const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/user-routes")
const cors = require("cors")
const http = require("http")
const app = express()

const port = process.env.PORT || 3030

app.use(cors())

app.use(express.json())
const dotenv = require('dotenv')
dotenv.config();
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
  .then(() => app.listen(port, () => console.log(`Mongodb connected and listning on port ${port}`)))
  .catch((err) => console.log(err))

  //  Web-Socket
  
  const {Server} = require('socket.io');

  let server = http.createServer(app)
  const io = new Server(server,{
    cors:{
      origin:'*',
      // methods:['GET', 'POST']
    }
  })

  server.listen(3001,()=>{
    console.log("socket connected & running at", 3001)
  })





  // let io = socketIO(server)
  // server.listen(3020);

  io.on('connection', (socket)=>{
    console.log('user connected userId: ', socket.id);
    socket.on('server', (data)=>{
      socket.broadcast.emit('client',data)
      // socket.broadcast.emit('server',data)
    })
  });


