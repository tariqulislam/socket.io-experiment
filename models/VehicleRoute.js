const mongoose = require('mongoose');

const VehicleRouteSchema = new mongoose.Schema({
    driver_id: { type: Schema.Types.ObjectId, ref: 'Driver'},
    trip_id: {type: Schema.Types.ObjectId, ref:'Trip'},
    client_id: {type:String},
    current_location: { type:[Number], index: '2d' },
    current_location_name: { type: String},
    location_name: { type:String, required: false},
    update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('VehicleRoute', VehicleRouteSchema);
