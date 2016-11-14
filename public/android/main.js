var socket = io.connect('http://localhost:3000', {'forceNew' : true});

socket.on('mensaje', function(data){
	console.log(data);
});

function lanzaMensaje(e){
	var cargar = "Alerta enviada";
	console.log("Boton apretado en android");

	socket.emit('nuevo-mensaje', cargar);
	return false;
}