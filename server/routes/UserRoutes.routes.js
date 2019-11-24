module.exports = (app) => {
    const AppUsers = require('../controllers/Users/AppUser.controller.js');

    //app.get('/getAllCamerasForRentals', AppUsers.findAll);  // Retrieve all Cameras For Rentals.    
    app.post('/addUserForRentals', AppUsers.addUser);  // Create a new User for Rentals.
    //app.get('/getCameraForRentals/:CameraId', AppUsers.findOne);  // Retrieve a single Camera Info with CameraId.
    //app.put('/updateCameraInfoForRentals/:CameraId', AppUsers.update);  // Update a Cam with CameraId.
    //app.delete('/deleteCameraInfoForRentals/:CameraId', AppUsers.delete);  // Delete a Cam with CameraId.
}