module.exports = (app) => {
    const CameraManufacturer = require('../controllers/Cameras/CameraManufacturer.controller.js');

    // Retrieve all Cam Manufacturer.
    app.get('/getAllCameraManufacturers', CameraManufacturer.findAll);

    // Create a new Cam Manufacturer.
    app.post('/createCameraManufacturer', CameraManufacturer.create);
}