const passport = require('passport');
const { Router } = require('express');

module.exports.Router = class Profile extends Router {
    constructor() {
        super();
        this.get('/', function(req, res) {
            res.status(200).render('profile.ejs', {
                bot: req.bot.user,
                user: req.user,
                is_logged: (req.isAuthenticated()),
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
                iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`
            });
        });
    }
};

module.exports.name = '/profile';
