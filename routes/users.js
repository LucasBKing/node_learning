module.exports = (app) => {
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
    
    app.get('/users/admin', (req, res) => {
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
};