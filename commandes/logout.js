module.exports.run = async (client, msg) => {
    if(msg.author.id != client.config.BOT_OWNER_ID) return msg.channel.send("❌ Vous n'avez pas les droits nécessaire pour faire cette commande.");
        msg.channel.send("⚙ Arrêt en cours...").then(async() => {
            console.log('Hors-ligne');
            await client.destroy();
            await process.exit()
        })
}

module.exports.help = {
    name : "logout",
    type: "Owner",
}
