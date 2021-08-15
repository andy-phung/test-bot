const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

// clientId + this guild id and whatever other guild ids you want to use should be stored in config.json as a const and const array, respectively
// note that doing things globally (across all guilds this bot has access to) is possible--see the guide
const clientId = '872543813355315200';
const guildId = '754243466241769512';

// client initialization + logging in
// remember to specify only the intents that you need
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(token);

// fun stuff
//client.user.setActivity('Bohemian Rhapsody', { type: 'LISTENING' });

// grabbing events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

//grabbing commands from commands folder
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

const rest = new REST({ version: '9' }).setToken(token);

// refreshing commands in the specified guild
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

// command handling
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (!client.commands.has(commandName)) {	
		console.log(`Command "${commandName}" not found.`)
		return;
	}

	try {
		await client.commands.get(commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// event handling
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}