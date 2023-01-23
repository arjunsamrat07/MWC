const Sequelize = require("sequelize")
const db = require("./index")

const Vehiclemodel = db.sequelize.define("vehiclemodel", {
    // id: {
    //     type: Sequelize.INTEGER,
    //     autoincrement: true,
    //     allowNull: false,
    //     primaryKey: true
    // },
    vehicleType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ownerName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobileNo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vehicleRegNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    empName: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

module.exports = Vehiclemodel;