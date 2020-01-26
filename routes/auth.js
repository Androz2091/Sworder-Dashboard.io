const passport = require('passport');
const { Router } = require('express');
const CheckAuth = require('../middlewares/CheckAuth');

module.exports.Router = class Auth extends Router {
    constructor() {
        super();
        this.get('/login', passport.authenticate('discord', { failureRedirect: '/' }), (req, res, next) => res.status(200).redirect('/profile'));
        this.get('/logout', [CheckAuth], function(req, res) {
            req.logout();
            res.status(200).redirect('/');
        });
    }
};

module.exports.name = '/auth';
