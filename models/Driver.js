let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone_no: { type: Number, required: true, unique: true },
    password: { type: String, require: true },
    driver_photo: { type: String, require: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Driver', DriverSchema);
