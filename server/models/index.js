const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  //   operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.vehicle = require("./vehicleModel.js")(sequelize, Sequelize);
db.vehicletimelog = require("./vehicleTimeLog.js")(sequelize, Sequelize);

// 1 to many relation

// db.vehicle.hasMany(db.vehicletimelog, {
//   foreignKey: "id"
// })

// db.vehicletimelog.belongsTo(db.vehicle, {
//   foreignKey: "id"
// })


module.exports = db;