module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Root@123",
    DB: "mwcdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

// const Sequelize = require("sequelize")
// const sequelize = new Sequelize("mwcdb", "root", "Root@123",{
//     dialect:"mysql",
//     host:"localhost"
// })

// module.exports = sequelize;