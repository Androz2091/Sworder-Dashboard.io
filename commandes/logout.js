const Discord = require("discord.js");


module.exports.run = async (client, msg) => {

if(msg.author.id != client.config.BOT_OWNER_ID) return msg.channel.send("❌ Vous n'avez pas les droits nécessaire pour faire cette commande.");

    msg.channel.send("⚙ Arrêt en cours...").then(() => {

        console.log('Hors-ligne');

        client.destroy();

        process.exit()
	})
}


module.exports.help = {
    name : "logout",
    type: "Owner",
}