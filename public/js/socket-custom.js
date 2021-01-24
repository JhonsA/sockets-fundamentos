var socket = io();

// Escuchar on
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

// Escuchar on
socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

// Enviar información emit
// Emit es solo enviar al servidor

socket.emit('enviarMensaje', {
    usuario: 'Jhons',
    mensaje: 'Hola Mundo'
}, function( resp ){
    console.log( 'Respuesta server: ', resp );
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});