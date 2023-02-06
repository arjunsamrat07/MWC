
const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) =>{
    const Vehicle = sequelize.define("vehicle",{
        vehicleType :{
            type:Sequelize.STRING
        },
        ownerName :{
            type:Sequelize.STRING
        },
        mobileNo :{
            type:Sequelize.BIGINT,
            // allowNull: false
        },
        vehicleRegNo :{
            type:Sequelize.STRING
        },
        empName :{
            type:Sequelize.STRING
        },
        vehicleInTime :{
            type:Sequelize.TIME,
            defaultValue:DataTypes.NOW
           
        }
    })
    
    return Vehicle;
}