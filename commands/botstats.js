const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('botstats')
		.setDescription('placeholder'),
	async execute(interaction) {
		await interaction.reply('placeholder');
	}
};