// Utiliza-se o app para inicializar o Express que será a função para fornecer um servidor HTTP
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Definindo uma rota "/" que será chamada quando acessarmos a página inicializar
app.get('/', function (req, res) {
    res.sendfile('index.html');
});

// Quando ocorrer chamadas para o socket, irá logar mensagens no terminal.
io.on('connection', function(socket) {
    socket.on('messageChat', function(msg) {
        io.emit('messageChat', msg);
    });
});

// Definindo a porta 8000 para nos servir a aplicação
http.listen(8000, function() {
    console.log("Server running - Port: 8000");
});