module.exports = (app) => {
    const cameraManufacturer = require('../controllers/Cameras/CamManufacturer.controller.js');

    // Retrieve all Cam Manufacturer.
    app.get('/getAllCameraManufacturers', cameraManufacturer.findAll);

    // Create a new Cam Manufacturer.
    app.post('/createCameraManufacturer', cameraManufacturer.create);
}