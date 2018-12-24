const Discord = require("discord.js");

module.exports.run = async (client, msg) => {

    let embed = new Discord.RichEmbed()
	.setThumbnail(client.user.avatarURL) 
	.setColor(0xffffff)
	.setDescription("Bienvenue dans la démo de **Dashboard.io**.\n\nVous pouvez accéder au dashboard sur le port `3000`.\nAfin d'avoir une bonne utilisation du dashboard, veuillez avoir bien complété le fichier `config.json`.\n\nNous vous souhaitons une agréable utilisation de **Dashboard.io**.\n\n__Aide rapide:__\n\nLe `client secret` se trouve sur la page de [votre bot](https://discordapp.com/developers/applications/).\nMettez la base de l'URL de votre site dans le fichier `config.json`, si vous êtes en local, mettez simplement: `http://localhost:3000`.")        
	.setFooter(`Dashboard.io © 2018`, `https://github.com/fluidicon.png`)
                 
     msg.channel.send(`Bonjour **${msg.author.username}** !`, embed);
    
}

module.exports.help = {
    name : "help",
    type: "bot",
}
