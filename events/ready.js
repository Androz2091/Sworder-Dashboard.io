module.exports = async (client) => {
    console.log(`${client.user.username} en ligne!`);
    await client.website.load(client);
    await client.user.setPresence({ game: { name: `${client.config.BOT_PREFIX}help`}});
}

