// USAR A BIBLIOTECA EXPRESS    
const express = require('express');

// USAR GERENCIADOR DE ROTAS
const router = express.Router();

// TER ACESSO AO QUE FOI DIGITADO NA URL
const url = require('url');

// FILTRAR DADOS DA URL 
const queryString = require('querystring');

// ROTAS

// http://localhost:3000/api-agenda/contato-dao/getId?id=22 
router.get('/getId', (req, res, next) => {
    const reqUrl = url.parse(req.url)
    const queryParams = queryString.parse(reqUrl.query)
    const paramId = queryParams.id;
    res.status(200).send({
        response : 'Contato solicitado >> ' + paramId
    });
});

// http://localhost:3000/api-agenda/contato-dao/create
router.post('/create', (req, res, next) => {
    const {nome, fone, email} = req.body;
    const contato = {nome, fone, email}
    res.status(201).send({
        response : 'Contato criado >> ', 'Dados do contato: ': contato 
    });
});

// http://localhost:3000/api-agenda/contato-dao/getAll
router.get('/getAll', (req, res, next) => {
    res.status(200).send({
        response : 'Contatos encontrados'
    });
});

// http://localhost:3000/api-agenda/contato-dao/update
router.post('/update', (req, res, next) => {
    const {id, nome, fone, email} = req.body;
    const contato = {id, nome, fone, email}
    res.status(201).send({
        response : 'Contato criado >> ', 'Dados do contato: ': contato 
    });
});

// EXPORTAR O MÓDULO PARA USO
module.exports = router;