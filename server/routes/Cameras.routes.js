module.exports = (app) => {
    const CameraManufacturer = require('../controllers/Cameras/CameraManufacturer.controller.js');
    const CameraRentalsInfos = require('../controllers/Cameras/CameraRentalsInfo.controller.js');
    
    app.get('/getAllCameraManufacturers', CameraManufacturer.findAll);  // Retrieve all Cam Manufacturers.    
    app.post('/createCameraManufacturer', CameraManufacturer.create);  // Create a new Cam Manufacturer.
    app.get('/getCameraManufacturers/:CamManufacturerId', CameraManufacturer.findOne);  // Retrieve a single Cam Manufacturer with CamManufacturerId.
    app.put('/getCameraManufacturers/:CamManufacturerId', CameraManufacturer.update);  // Update a Cam Manufacturer with CamManufacturerId.
    app.delete('/getCameraManufacturers/:CamManufacturerId', CameraManufacturer.delete);  // Delete a Cam Manufacturer with CamManufacturerId.
       
    app.get('/getAllCamerasForRentals', CameraRentalsInfos.findAll);  // Retrieve all Cameras For Rentals.    
    app.post('/insertCameraInfoForRentals', CameraRentalsInfos.insert);  // Insert a new Camera Info for Rentals.
    app.get('/getCameraForRentals/:CameraId', CameraRentalsInfos.findOne);  // Retrieve a single Camera Info with CameraId.
    //app.put('/getCameraForRentals/:CameraId', CameraRentalsInfos.update);  // Update a Cam with CameraId.
    app.delete('/getCameraForRentals/:CameraId', CameraRentalsInfos.delete);  // Delete a Cam with CameraId.
}