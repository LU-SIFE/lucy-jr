const cron = require('node-cron');
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, ActivityType, channels, Collection, Events, Partials } = require('discord.js');
const dotenv = require('dotenv').config();
const token = process.env['CLIENT_TOKEN'];
const quotestatus = require('./quotes.js');

const client = new Client({
  presence: {
    status: 'online',
    afk: false,
    activities: [{
      name: "the cries of children",
      type: ActivityType.Listening,
    }],
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ],
  partials: [
    Partials.Channel,
    Partials.Message
  ],
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(token);

// TODO
// --- //
//
// add custom per-user instructions
// add extra trigger cases
// chatgpt history? (per-user? global?)
