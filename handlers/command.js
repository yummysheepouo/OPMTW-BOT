const chalk = require('chalk')
const glob = require('glob');
const { promisify } = require('util');
// const fs = require('fs');
const AsciiTable = require('ascii-table')
const table = new AsciiTable()
table.setHeading('Commands', 'Stats').setBorder('|', '=', "0", "0")

const globPromise = promisify(glob);

module.exports = async (client) => {
	const commands = await globPromise(`${process.cwd().replace(/\\/g, '/')}/commands/**/*.js`);
	if (!commands || !commands.length) return console.log(chalk.red('Commands - 0'));
	commands.forEach((cmd) => {
		const command = require(cmd);
		if (!command) return table.addRow(cmd, '⛔');
		if (!command.name) return console.log(chalk.red(`${cmd} -> Command missing name!`));
		client.commands.set(command.name, command);
		if (command.aliases && Array.isArray(command.aliases)) {
			command.aliases.forEach((alias) => {
				client.aliases.set(alias, command.name);
			});
		}
		table.addRow(command.name, '✅');
	})
	console.log(chalk.blue(table.toString()))
};
