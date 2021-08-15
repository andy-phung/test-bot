const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userstats')
		.setDescription('placeholder'),
	async execute(interaction) {
		await interaction.reply('placeholder');
	}
};// sends stats of user