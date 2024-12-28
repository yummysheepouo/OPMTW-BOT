const {
	ActivityType
} = require('discord.js');
const client = require('..');
const chalk = require('chalk');

module.exports = {
	event: 'ready',
	async run() {

		console.log(`Logged in as: ${client.user.tag}`)

		const activities = [{
			name: `使用/help獲取所有指令！ `,
			type: ActivityType.Playing
		}
	                 
		];
		let i = 0;
		setInterval(() => {
			if (i >= activities.length) i = 0
			client.user.setActivity(activities[i])
			i++;
		}, 5000);

		global.slashCommandsFetchList = await client.application.commands.fetch()

	}
}