const { Client } = require('discord.js');
const { promisify } = require('util');
const chalk = require('chalk');
const glob = require('glob');
const AsciiTable = require('ascii-table');

const table = new AsciiTable().setHeading('Events', 'Stats').setBorder('|', '=', "0", "0")
const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
  const eventFiles = await globPromise(`${process.cwd().replace(/\\/g, '/')}/events/*.js`);
  eventFiles.forEach((ev) => {
    const event = require(ev);
    if (!event?.event || !event?.run) return table.addRow(event.event, '⛔ -> missing event/run')

    client.on(event.event, event.run);
    table.addRow(event.event, '✅')
  })

  console.log(chalk.greenBright(table.toString()));
}