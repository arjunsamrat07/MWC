module.exports = (sequelize, Sequelize) =>{
    const Vehicle = sequelize.define("vehicle",{
        vehicleType :{
            type:Sequelize.STRING
        },
        ownerName :{
            type:Sequelize.STRING
        },
        mobiloeNo :{
            type:Sequelize.INTEGER
        },
        vehicleRegNo :{
            type:Sequelize.STRING
        },
        empName :{
            type:Sequelize.STRING
        }
    })
    
    return Vehicle;
}