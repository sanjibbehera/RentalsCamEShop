const CameraRentalsInfoObj = require('../../models/Cameras/CameraRentalsInfo.model.js');

// Retrieve and return all Cameras for Rentals from the database.
exports.findAll = (req, res) => {
    CameraRentalsInfoObj.find()
    .then(camerarentalsinfo => {
        res.send(camerarentalsinfo);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Cameras for Rentals."
        });
    });
};

// Insert and Save a new Cam Info for Rentals..
exports.insert = (req, res) => {
    // Validate request
    if(!req.body.CameraName) {
        return res.status(400).send({
            message: "Cam Name can not be empty"
        });
    }

    // Create a CamManufacturer
    const CameraRentalsInfo = new CameraRentalsInfoObj({
        ItemType: req.body.ItemType, 
        Quantity: req.body.Quantity,
        CameraMaker: req.body.CameraMaker,
        CameraName: req.body.CameraName,
        CameraRentalPrice: req.body.CameraRentalPrice,
        CameraInventoryRegistryNo: req.body.CameraInventoryRegistryNo
    });

    // Save Camera Manufacturer in the database
    CameraRentalsInfo.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the CamManufacturer."
        });
    });
};

// Find a single Camera Manufacturer with a manufacturerId
exports.findOne = (req, res) => {
    CameraRentalsInfoObj.findById(req.params.CameraId)
    .then(camerarentalsinfo => {
        if(!camerarentalsinfo) {
            return res.status(404).send({
                message: "Camera not found with id " + req.params.CameraId
            });            
        }
        res.send(camerarentalsinfo);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Camera not found with id " + req.params.CameraId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Camera with id " + req.params.CameraId
        });
    });
};

// Delete a Camera Manufacturer with the specified manufacturerId in the request
exports.delete = (req, res) => {
    CameraRentalsInfoObj.findByIdAndRemove(req.params.CameraId)
    .then(camerarentalsinfo => {
        if(!camerarentalsinfo) {
            return res.status(404).send({
                message: "Camera not found with id " + req.params.CameraId
            });
        }
        res.send({message: "Camera for Rentals deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Camera not found with id " + req.params.CameraId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Camera with id " + req.params.CameraId
        });
    });
};

