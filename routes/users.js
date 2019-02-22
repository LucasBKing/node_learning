let express = require('express');
let routes = express.Router();

routes.get('/', (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'LucasBKing',
            email: 'ldsbarbosa@inf.ufpel.edu.br',
            id: 1
        }]
    });
});

routes.get('/admin', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'admin',
            email: 'admin@comp.admin',
            id: 0
        }]
    });
});

module.exports = routes;