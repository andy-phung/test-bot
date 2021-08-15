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

		// messing around w/ permissions
		guild = client.guilds.cache.get('754243466241769512');
		const user = interaction.options.getUser('554840217165496322');
		console.log("cool")
		guild.roles.create({ name: 'Goated', permissions: [Permissions.FLAGS.MANAGE_MESSAGES, Permissions.FLAGS.KICK_MEMBERS, Permissions.FLAGS.BAN_MEMBERS, Permissions.FLAGS.MANAGE_CHANNELS] });
		

		// does my alt have permission to view and send messages in test-channel? if not, give them those perms w/ overwrites
		// actually, nevermind--my alt should only be able to view (edit overwrite)
		// let's take a look at my alt's final perms
		// and in permission flag array form: 
		// kinda feel bad now--let's give my alt the send messages perm back w/ the permissions object



	},
};