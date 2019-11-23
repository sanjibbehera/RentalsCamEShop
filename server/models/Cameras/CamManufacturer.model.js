const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const CamManufacturerSchema = mongoose.Schema({
    CamManufacturerName: { type: String, required: true, },
    Description: { type: String, required: true, },
}, {
    timestamps: true
});

module.exports = mongoose.model('CamManufacturer', CamManufacturerSchema);