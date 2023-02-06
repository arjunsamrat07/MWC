// const vehicleModel = require('../models/vehicle')
const vehicle = require("./vehicleModel")

const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {

    const vehicleTimeLog = sequelize.define("vehicletimelog", {


        vehicleNo: {
            type: Sequelize.STRING,

        },

        vehicleInTime: {
            type: Sequelize.TIME,

        },

        vehicleOutTime: {
            type: Sequelize.TIME,

        }


    })

    return vehicleTimeLog;
}


