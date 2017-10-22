const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripStatusSchema = new mongoose.Schema({
  driver_id: { type: Schema.Types.ObjectId, ref:'Driver'},
  booking_status: {type:Boolean, default: false},
  requested_status: {type:Boolean, default:false},
  online_status: {type:Boolean, default: false},
  client_id: { type:String},
  current_location: { type:[Number], index: '2d'},
  call_cancel_count: { type:Number, default:0},
  current_date_time:{type:Date, default: Date.now}
});

module.exports = mongoose.model('TripStatus', TripStatusSchema);
