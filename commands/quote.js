const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('gives a random quote~')
		.addStringOption(option => option.setName('quote').setDescription('quote number')),
	async execute(interaction, client, message, channels) {

		const quotes = require('../quotes.js');

		let Picked = "";

		if (interaction.options.getString('quote')) {
			
			Picked = quotes[interaction.options.getString('quote') - 1];
		} else {
			Picked = quotes[Math.floor(Math.random() * quotes.length)];
		}

		console.log("Quote~");
		return interaction.reply(Picked);
	},
};