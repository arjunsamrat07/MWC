const db = require("../models")
const Vehicle = db.vehicle
const vehicleTimeLog = db.vehicletimelog
const op = db.Sequelize.Op


// create and save new vehicle 

const vehicleRegister = (req, res) => {

    const { vehicleType, ownerName, mobileNo, vehicleRegNo, empName, vehicleInTime } = req.body

    Vehicle.create({ vehicleType, ownerName, mobileNo, vehicleRegNo, empName, vehicleInTime }).then(data => {
        return res.status(201).send({ message: "vehicle addded successfully..!", data });
    })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vehicle."
            });
        });

}


// get single vehicle
const getSingleVehicle = async (req, res) => {
    const vehicleRegNo = req.params.vno;
    console.log(req.body)

    await Vehicle.findOne({
        where: {
            vehicleRegNo: vehicleRegNo
        }

    }).then(async data => {
        if (data) {

            let time = new Date()

            await vehicleTimeLog.create({ vehicleNo: data.vehicleRegNo, vehicleInTime: time, vehicleOutTime: "" })
            return res.status(200).send({ message: "Vehicle In time added successfully", data });
        }
        console.log("outside vehicle log")
        return res.status(404).send({ message: "vehicle not found with Vehicle Number*****" + vehicleRegNo })
    }).catch(err => {
        return res.status(500).send(err.message)
    })
}


// to get all vehicles 
const getAllVehicles = async (req, res) => {
    await Vehicle.findAll()
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving vehicles."
            });
        });
};


// add vehicle time log
const addVehicleTimeLog = async (req, res) => {


    console.log("......", req.body)

    const { vehicleId, vehicleInTime, vehicleOutTime } = req.body;

    vehicleTimeLog.create({ vehicleId, vehicleInTime, vehicleOutTime }).then((data) => {
        return res.status(201).send({ message: "vehicle time log added successfully...!", data })
    }).catch((err) => {
        return res.status(500).send({ message: err.msg || "some error occurred while adding vehicle time log  " })
    })
    if (!vehicleTimeLog) {
        return res.status(404).send({ message: "vehicle time log not found" })
    }
}

// to get all vehicle time logs
const getAllVehiclesTimeLog = (req, res) => {
    vehicleTimeLog.findAll().then((data) => {
        console.log("777777", data)
        return res.send(data)
    }).catch((err) => {
        return res.status(500).send({ message: "Vehicle time log not found", err })
    })
}

// update vehicle out time

const updateVehicleOutTime = async (req, res) => {
    const vehicleRegNo = req.params.vehicleRegNo
    let time = new Date()
    await vehicleTimeLog.update({ vehicleOutTime: time }, {
        where: {
            vehicleNo: vehicleRegNo
        }
    }).then(() => {
        return res.status(200).send({ message: "vehicle out time updated successfully" })
    })

}


exports.vehicleRegister = vehicleRegister
exports.getAllVehicles = getAllVehicles
exports.addVehicleTimeLog = addVehicleTimeLog
exports.getAllVehiclesTimeLog = getAllVehiclesTimeLog
exports.getSingleVehicle = getSingleVehicle
exports.updateVehicleOutTime = updateVehicleOutTime