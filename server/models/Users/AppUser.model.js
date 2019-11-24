const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const AppUsersSchema = mongoose.Schema({
    AppUserName: { type: String, required: true, },
    AppUserPassword: { type: String, required: true, },
    Description: { type: String, required: false, },
    AppUserPrivilege: { type: String, required: true, },
    AppUserDOB: { type: Date, required: true, },
    AppUserEmail: { type: String, required: true, },
    AppUserPwdRetrieveQuestion1: { type: String, required: true, },
    AppUserPwdRetrieveAnswer1: { type: String, required: true, },
}, {
    timestamps: true
});

module.exports = mongoose.model('AppUsers', AppUsersSchema);