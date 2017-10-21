var  express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


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

console.log("thi is main driver status",drivers);



server.listen(4100, () => {
  console.log("server is running at port", 4100);
});

