const express = require('express');

let app = express();


app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello</h1>');
});

app.get('/users', (req,res) => {
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
    
app.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});
