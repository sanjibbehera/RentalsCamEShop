const AppUserObj = require('../../models/Users/AppUser.model.js');

// Insert and Save a new Cam Info for Rentals..
exports.addUser = (req, res) => {
    // Validate request
    if((!req.body.AppUserName) && (!req.body.AppUserPassword)) {
        return res.status(400).send({
            message: "App User Name and App User Password can not be empty"
        });
    }

    // Create a CamManufacturer
    const Appuser = new AppUserObj({
        AppUserName: req.body.AppUserName, 
        AppUserPassword: req.body.AppUserPassword,
        Description: req.body.Description,
        AppUserPrivilege: req.body.AppUserPrivilege,
        AppUserDOB: req.body.AppUserDOB,
        AppUserEmail: req.body.AppUserEmail,
        AppUserPwdRetrieveQuestion1: req.body.AppUserPwdRetrieveQuestion1,
        AppUserPwdRetrieveAnswer1: req.body.AppUserPwdRetrieveAnswer1
    });

    // Save Camera Manufacturer in the database
    Appuser.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the App User."
        });
    });
};