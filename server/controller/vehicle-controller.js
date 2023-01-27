const db = require("../models")
const Vehicle = db.vehicle
const op = db.Sequelize.Op


// create and save new vehicle 

const vehicleRegister = (req, res) => {

    const { vehicleType, ownerName, mobileNo, vehicleRegNo, empName } = req.body

    Vehicle.create({vehicleType, ownerName, mobileNo, vehicleRegNo, empName}).then(data => {
        res.status(201).send({ message: "vehicle addded successfully..!", data });
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vehicle."
            });
        });

}



// to get all vehicles 

const getAllVehicles = (req, res) => {
    Vehicle.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};



exports.vehicleRegister = vehicleRegister
exports.getAllVehicles = getAllVehicles