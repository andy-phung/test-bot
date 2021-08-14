const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents } = require('discord.js');
const token = require('./config.json');
const fs = require('fs');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', interaction => {
	console.log(interaction);
});

client.login(token);