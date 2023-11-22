// URL base para diferenciar projetos
const URL_BASE = '/API-AGENDA';

// USAR BIBLIOTECA DO EXPRESS
const express = require('express');

// CRIAR UMA INSTANCIA DO MEU APP 
// ATRAVES DO EXPRESS
const app = express();

// IMPORTAR O MORGAN
const morgan = require('morgan');

// UTILIZAR O MORGAN
app.use(morgan('dev'));

// UTILIZAR O BODY-PARSER  
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// DESTE PONTO EM DIANTE : ROTAS
const contatoDao = require('./rotas/contatoDao');
app.use(URL_BASE + '/contato-dao', contatoDao);

// http://localhost:3000/api-agenda
app.use(URL_BASE, (req,res,next) => {
    res.status(200).send({
        response : 'Url base do servidor funcionou!'
    });

});

// CASO NENHUMA ROTA SEJA ENCONTRADA
app.use((req,res,next) => {
    const erro = new Error('Rota não encontrada')
    erro.status = 404;
    next(erro)
});

// EXPORTAR PARA FUNCIONAR
module.exports = app;