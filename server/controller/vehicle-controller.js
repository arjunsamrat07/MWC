const { Socket } = require("socket.io")
const { toroom, sendMessage } = require("..")
// const { StrictEventEmitter } = require("socket.io/dist/typed-events")
const db = require("../models")

const Vehicle = db.vehicle

const op = db.Sequelize.Op


// create and save new vehicle 

const vehicleRegister = (req, res) => {
    const vehicle = {
        vehicleType: req.body.vehicleType,
        ownerName: req.body.ownerName,
        mobileNo: req.body.mobileNo,
        vehicleRegNo: req.body.vehicleRegNo,
        empName: req.body.empName
    }
    console.log(sendMessage)
    // sendMessage('security', 'security', 'sec al')
    res.send(vehicle)
    // Vehicle.create(vehicle).then(data => {
    //     res.send(data);
    // })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while creating the Tutorial."
    //         });
    //     });

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