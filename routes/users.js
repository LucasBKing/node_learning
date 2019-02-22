let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {
    let routes = app.route('/users');
    let routesId = app.route('/users/:id');


    // Getting all users
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
    
    // Creating a user
    routes.post((req, res) => {

        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });

    // Getting a user
    routesId.get((req, res) => {
        db.findOne({_id:req.params.id}).exec((err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });

    // Updating user
    routesId.put((req, res) => {
        db.update({_id:req.params.id}, req.body, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });
    });

    // Deleting user
    routesId.delete((req, res) => {
        db.remove({_id:req.params.id}, {}, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }
        });
    });



};