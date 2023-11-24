const mysql = require("mysql");

const connection = mysq.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root@senha1234',
    data: 'api_agendas'
});

connection.connect((err) => {
    if(err){
        console.error('erro ao conectar no mysql: ', err);
    } else {
        console.log('Conexão bem-sucedida ao mysql');
    }
});

module.exports = connection;