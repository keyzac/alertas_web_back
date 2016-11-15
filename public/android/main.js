var socket = io.connect('http://localhost:3000', {'forceNew' : true});

socket.on('mensaje', function(data){
	console.log(data);
});

function lanzaMensaje(alerta){
	var cargar = 'alerta';
	console.log("Boton apretado en android");

	socket.emit('nuevo-mensaje', cargar);
	return false;
}