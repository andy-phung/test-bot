module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('client ready');
		client.user.setActivity('Bohemian Rhapsody', { type: 'LISTENING' });

	},
};