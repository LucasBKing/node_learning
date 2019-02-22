module.exports = {
    user:(app, req, res) => {
        req.assert('name', 'Required name').notEmpty();
        req.assert('email', 'Required email').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false;
        }  else {
            return true;
        }
    }
}