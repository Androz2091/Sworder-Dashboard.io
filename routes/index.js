const passport = require('passport');
const { Router } = require('express');

module.exports.Router = class Home extends Router {
    constructor() {
        super();
        this.get('/', function(req, res) {
            res.status(200).render('index.ejs', {
                bot: req.bot.user,
                user: req.user,
                is_logged: (req.isAuthenticated())
            });
        });
    }
};

module.exports.name = '/';