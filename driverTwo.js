var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io =  require('socket.io-client');
var socket = io.connect("http://localhost:4100");



socket.on('connect', () => {
    console.log("socket is connected to server")
    socket.emit('save_driver_online', {driver_id: "dv2"})
});

app.get('/driver/driving/status/:status', (req,res,next) => {
    socket.emit('driver_driving_status', { status:"okay", driver_id: "div4"});
})

app.listen(4205, () => {
   console.log('driver five run at port :'+ 4205)
})
