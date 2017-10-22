const  express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const database = require('./config/database');
const mongoose = require('mongoose');

console.log('this is db connection', database.connectionString);

mongoose.connect(database.connectionString, { useMongoClient: true })
.then(res => {
      console.log('connection status: ' + res)
})
.catch(err =>{
    console.error('connection status: '+err)
});



let drivers = [];

io.sockets.on('connection', (socket) => {

    socket.on('save_driver_online', (data) => {
        console.log("this is data of", data)
        let driver = new Object();
       driver.id = data.driver_id;
       driver.clientid = socket.id;
       driver.status = "online";
       drivers.push(driver);
    })

    socket.on('driver_location_update', (data) => {

    });

    socket.on('driver_online_status_update', (data) => {

    });

    soket.on('driver_trip_start', (data) => {

    });

    socket.on('driver_trip_end', (data) => {

    });

    socket.on('current_location_drivers', (data) => {

    });

    socket.on('disconnect', (data) => {
        console.log("before disconnect",drivers)
        var disconnectId = socket.id;
        var disDriver = drivers.filter(x=> x.clientid == disconnectId);
        disDriver.status = "offline"
        socket.emit('messages', 'Hello from server');
        console.log("after disconnected", drivers)
    })

    socket.on('driver_driving_status', (data) => {
        console.log("driver status is:",data);
    })
  
})

server.listen(4100, () => {
  console.log("server is running at port", 4100);
});

