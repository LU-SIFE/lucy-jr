const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('*Replies with Boopsies!~*'),
	async execute(interaction) {
		console.log('EXECUTED: BOOP');
		switch(Math.floor(Math.random() * 4 + 1)) {
		case 1:
			return interaction.reply('`Boopy!`');
			break;
		case 2:
			return interaction.reply('*Boopers!*');
			break;
		case 3:
			return interaction.reply('*Boop...*');
			break;
		case 4:
			return interaction.reply('`Boops~`');
			break;
		}
	},
};