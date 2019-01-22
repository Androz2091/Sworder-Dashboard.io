const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  fetchAllMembers: true
});

const fs = require("fs");

let config = require("./config");

client.website = require("./website/dashboard");
client.config = config;
client.commands = new Discord.Collection();

fs.readdir("./commandes/", (err, files) => {
  if(err) throw err;
  let commandes = files.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("[ALERTE] Aucune commande de trouvé.");

  commandes.forEach((f, i) =>{
    let commande = require(`./commandes/${f}`);
    console.log(`[COMMANDE] ${f} chargée!`);
    client.commands.set(commande.help.name, commande);
  });
});

fs.readdir("./events/", (err, files) => {
  if(err) throw err;
  console.log(`Nombre d\'event en chargement ${files.length}`);

  files.forEach((f) => {
    const events = require(`./events/${f}`);
    const event = f.split(".")[0];
    client.on(event, events.bind(null, client));
    delete require.cache[require.resolve(`./events/${f}`)];
  });
});

client.login(config.BOT_TOKEN);
module.exports = client;

