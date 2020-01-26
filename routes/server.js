const passport = require('passport');
const { Router } = require('express');
const CheckAuth = require('../middlewares/CheckAuth');

module.exports.Router = class Server extends Router {
    constructor() {
        super();
        this.get('/:guildID', (req, res) => {
            const guild = req.bot.guilds.get(req.params.guildID);
            if (!guild) return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${req.bot.user.id}&scope=bot&permissions=-1&guild_id=${req.params.guildID}`);
            if (!req.bot.guilds.get(req.params.guildID).members.get(req.user.id).hasPermission("MANAGE_GUILD")) return res.redirect('/profile');
            res.status(200).render("guild.ejs", {
                bot: req.bot.user,
                user: req.user,
                is_logged: (req.isAuthenticated()),
                avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
                iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
                guild
            });
        });
        this.post("/:guildID", [CheckAuth], async (req, res) => {
            if (!req.body.send_CHANNELID || req.body.send_CHANNELID === "NOT_SET") return res.status(400).send("Erreur, pas de salon spécifié !");
            if (!req.body.send_MESSAGE || req.body.send_MESSAGE.length === 0) return res.status(400).send("Erreur, pas de message spécifié !");
            await req.bot.guilds.get(req.params.guildID).channels.get(req.body.send_CHANNELID).send(req.body.send_MESSAGE);
            await res.redirect(`/server/${req.params.guildID}`);
        });
    }
};

module.exports.name = '/server';
