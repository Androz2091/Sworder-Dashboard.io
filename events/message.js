module.exports = async (client, msg) => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  if (!msg.content.startsWith(client.config.BOT_PREFIX)) return; 
    let cmd = msg.content.slice(1).split(' ').shift().toLowerCase(); 
    let commande = client.commands.get(cmd);
    if(commande) commande.run(client, msg);
}

