var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  // User sends an example message
  socket.on('example message', function(msg){
    console.log(msg);
  });

  // User Disconnected
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
