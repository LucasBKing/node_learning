let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {
    let routes = app.route('/users');
    let routesId = app.route('/users/:id');

    routes.get((req,res) => {

        db.find({}).sort({name:1}).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                });
            }
        });
    });
    
    routes.post((req, res) => {

        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });

    routesId.get((req, res) => {
        db.findOne({_id:req.params.id}).exec((err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });


};