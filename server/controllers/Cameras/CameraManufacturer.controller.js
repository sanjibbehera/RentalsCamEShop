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

// Find a single Camera Manufacturer with a manufacturerId
exports.findOne = (req, res) => {
    CameraManufacturerObj.findById(req.params.CamManufacturerId)
    .then(cameramanufacturer => {
        if(!cameramanufacturer) {
            return res.status(404).send({
                message: "Cam Manufacturer not found with id " + req.params.CamManufacturerId
            });            
        }
        res.send(cameramanufacturer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cam Manufacturer not found with id " + req.params.CamManufacturerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Cam Manufacturer with id " + req.params.CamManufacturerId
        });
    });
};

// Delete a Camera Manufacturer with the specified manufacturerId in the request
exports.delete = (req, res) => {
    CameraManufacturerObj.findByIdAndRemove(req.params.CamManufacturerId)
    .then(cameramanufacturer => {
        if(!cameramanufacturer) {
            return res.status(404).send({
                message: "Camera Manufacturer not found with id " + req.params.CamManufacturerId
            });
        }
        res.send({message: "Camera Manufacturer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Camera Manufacturer not found with id " + req.params.CamManufacturerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Camera Manufacturer with id " + req.params.CamManufacturerId
        });
    });
};

// Update a Camera Manufacturer identified by the manufacturerId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.Description) {
        return res.status(400).send({
            message: "Camera Manufacturer Description can not be empty"
        });
    }

    // Find Camera Manufacturer and update it with the request body
    CameraManufacturerObj.findByIdAndUpdate(req.params.CamManufacturerId, {
        CamManufacturerName: req.body.CamManufacturerName,
        Description: req.body.Description
    }, {new: true})
    .then(cameramanufacturer => {
        if(!cameramanufacturer) {
            return res.status(404).send({
                message: "Camera Manufacturer not found with id " + req.params.CamManufacturerId
            });
        }
        res.send(cameramanufacturer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Camera Manufacturer not found with id " + req.params.CamManufacturerId
            });                
        }
        return res.status(500).send({
            message: "Error updating Camera Manufacturer with id " + req.params.CamManufacturerId
        });
    });
};