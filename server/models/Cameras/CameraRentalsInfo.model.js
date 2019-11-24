const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const CameraRentalsInfoSchema = mongoose.Schema({
    ItemType: { type: String, required: true, },
    Quantity: { type: Number, required: true},
    CameraMaker: { type: String, required: true, },
    CameraName: { type: String, required: true, },
    CameraRentalPrice: { type: Number, required: true, },
    CameraInventoryRegistryNo: { type: String, required: true, },
}, {
    timestamps: true
});

module.exports = mongoose.model('CameraRentalsInfo', CameraRentalsInfoSchema);