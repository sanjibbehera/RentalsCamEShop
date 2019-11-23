module.exports = (app) => {
    const CameraManufacturer = require('../controllers/Cameras/CameraManufacturer.controller.js');

    // Retrieve all Cam Manufacturer.
    app.get('/getAllCameraManufacturers', CameraManufacturer.findAll);

    // Create a new Cam Manufacturer.
    app.post('/createCameraManufacturer', CameraManufacturer.create);

    // Retrieve a single Cam Manufacturer with noteId
    app.get('/getCameraManufacturers/:CamManufacturerId', CameraManufacturer.findOne);

    // Update a Cam Manufacturer with noteId
    app.put('/getCameraManufacturers/:CamManufacturerId', CameraManufacturer.update);

    // Delete a Cam Manufacturer with noteId
    app.delete('/getCameraManufacturers/:CamManufacturerId', CameraManufacturer.delete);
}