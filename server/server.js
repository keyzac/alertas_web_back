var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var mensaje = "hola mundo";
var palabra = "karaoke";

app.use(express.static('public'));

io.on('connection', function(socket){
	console.log("El cliente se conecto con socket");
	socket.emit("mensaje", mensaje);

	socket.on('nuevo-mensaje', function(data){
		//mensaje = "hola";
		io.sockets.emit('mensaje', palabra);
	});
});

server.listen(3000, function(){
	console.log("El servidor esta corriendo");
});
