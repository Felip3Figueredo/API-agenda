// Importa o módulo http para criar um servidor web
const http = require('http');

// Importa o módulo app que contém a lógica da aplicação
const app = require('./app');

// Define a porta que o servidor vai escutar, usando a variável de ambiente port ou o valor padrão 3000
const port = process.env.port || 3000;

// Cria um servidor web usando o módulo app
const server = http.createServer(app);

// Inicia o servidor na porta especificada
server.listen(port);
