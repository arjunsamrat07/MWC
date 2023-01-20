const mysql = require("mysql2")

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
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
