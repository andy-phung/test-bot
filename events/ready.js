module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('client ready');
		// mamaaaaaa
		// ooooooo
		// didn't mean to make you cry
		// if i'm not back again this time tomorrow
		// carry on, carry on
		// as if nothing really mattered
		client.user.setActivity('Bohemian Rhapsody', { type: 'LISTENING' });

	},
};