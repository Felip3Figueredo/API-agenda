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

// EXPORTAR O MÓDULO PARA USO
module.exports = router;