const Discord = require('discord.js');

class Bot extends Discord.Client {
    constructor(token) {
        super();
        this.config = require('../config');
        this.token = token || this.config.bot.token;
        this.launch();
        this.on('ready', () => console.log(`${this.user.tag} a démarré avec succès !`));
    }

    launch() {
        this.login(this.token);
    }
};

module.exports = (token) => new Bot(token);