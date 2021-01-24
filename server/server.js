const express = require('express');
const socketIO = require('socket.io'); // No trabaja directamente con express, peri si con el http de node
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer( app ); // Tenemos el servidor con toda la configuracion que podriamos hacer en express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = estas es la comunicacion del backend
// Estoy exportando io para usarlo en socket.js
module.exports.io = socketIO( server );
require('./sockets/socket');

// Aqui ya no seria app.listen si no que server.listen
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});