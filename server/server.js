var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var mensaje = "Esperando alerta";
var palabra = "";
var sessionid;

app.use(express.static('public'));

io.on('connection', function(socket){
	console.log("El cliente se conecto con socket");
	sessionid = socket.id;
	console.log("Id del cliente ultimo conectado "+sessionid);

	socket.emit("mensaje", mensaje);

	socket.on('nuevo-mensaje', function(data){
		palabra = data;
		console.log(sessionid);
		socket.send('mensaje', palabra);
		io.to(sessionid).emit('mensaje', palabra);
	});
});

server.listen(3000, function(){
	console.log("El servidor esta iniciado");
});
