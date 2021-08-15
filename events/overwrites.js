module.exports = {
	name: 'guildMemberAdd',
	once: true,
	execute(member, client) {
		test_channel = client.channels.cache.get('876289274390122556');
		test_channel.permissionOverwrites.edit(String(member.id), { VIEW_CHANNEL: true });

		console.log(member.permissions.toArray());

		guild = client.guilds.cache.get("754243466241769512");
		guild_member = guild.members.cache.get('802419677455974411');
		console.log(guild_member);
		role = guild.roles.cache.find(role => role.name == "new role");

		guild_member.roles.add(role);

	},
};