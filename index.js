const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  fetchAllMembers: true,
});

var config = require("./config");
var fs = require('fs');

client.website = require("./website/dashboard");
client.config = config;

client.commands = new Discord.Collection();

fs.readdir("./commandes/", (err, files) => {

  if(err) console.log(err);

  let commandes = files.filter(f => f.split(".").pop() === "js");

  if(commandes.length <= 0) return console.log("Aucunes commandes trouvées :/");


  commandes.forEach((f, i) =>{

    let commande = require(`./commandes/${f}`);

    console.log(`${f} commande chargée!`);

    client.commands.set(commande.help.name, commande);

  });
});

fs.readdir('./events/', (err, files) => {

  if (err) throw err;

  console.log(`Nombre d\'event en chargement ${files.length}`);

  files.forEach((f) => {

    const events = require(`./events/${f}`);
    const event = f.split('.')[0];

    client.on(event, events.bind(null, client));

    setInterval(() => {

      delete require.cache[require.resolve(`./events/${f}`)];

    }, 2000) 

  });
});

client.login(config.BOT_TOKEN);

module.exports = client;
