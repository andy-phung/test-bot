const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wee')
		.setDescription('placeholder'),
	async execute(interaction) {
		await interaction.reply('placeholder');
	}
};