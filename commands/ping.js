const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Pong!', ephemeral: true });
		await new Promise(resolve => setTimeout(resolve, 3000)); // wait
		await interaction.editReply({ content: '🏓', ephemeral: true });
		await new Promise(resolve => setTimeout(resolve, 1000)); // wait
		await interaction.followUp({ content: 'weeeeeeeeeeeeeeeeeee', ephemeral: true });
	}
};