const CameraManufacturerObj = require('../../models/Cameras/CameraManufacturer.model.js');

// Create and Save a new Cam Manufacturer..
exports.create = (req, res) => {
    // Validate request
    if(!req.body.Description) {
        return res.status(400).send({
            message: "Cam Manufacturer Description can not be empty"
        });
    }

    // Create a CamManufacturer
    const CameraManufacturer = new CameraManufacturerObj({
        CamManufacturerName: req.body.CamManufacturerName, 
        Description: req.body.Description
    });

    // Save CamManufacturer in the database
    CameraManufacturer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the CamManufacturer."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    CameraManufacturerObj.find()
    .then(cameramanufacturer => {
        res.send(cameramanufacturer);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving CamManufacturer."
        });
    });
};