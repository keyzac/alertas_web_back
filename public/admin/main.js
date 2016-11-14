var socket = io.connect('http://localhost:3000', {'forceNew' : true});

socket.on('mensaje', function(data){
	console.log(data);
	mostrar(data);
});

function mostrar(data){
	var html = `<div>
					<strong>${data}</strong>
				</div>`;

	document.getElementById('mensajito').innerHTML = html;
}