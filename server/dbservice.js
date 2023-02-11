const mysql = require("mysql2")

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root@123",
  database: "mwcdb",
})


mysqlConnection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("mysql db connected successfully..!!")
  }
})

module.exports = mysqlConnection
