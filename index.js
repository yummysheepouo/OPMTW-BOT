
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
	
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

require('dotenv').config()
client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.prefix = '!'
module.exports = client;


const glob = require('glob');
const { promisify } = require('util');

const globPromise = promisify(glob);

async function registerHandlers() {
	const handlers = await globPromise(`${process.cwd().replace(/\\/g, '/')}/handlers/*.js`);
	handlers.forEach((handler) => {
		require(handler)(client);
	});
}
  
  registerHandlers();

client.login(process.env.TOKEN)

