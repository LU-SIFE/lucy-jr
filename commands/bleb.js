const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bleb')
		.setDescription('*bleb*'),
	async execute(interaction) {
		console.log('EXECUTED: BLEB');
		switch(Math.floor(Math.random() * 4 + 1)) {
		case 1:
			return interaction.reply('`Bleb!`');
			break;
		case 2:
			return interaction.reply('*Bleb~*');
			break;
		case 3:
			return interaction.reply('*Bleb...*');
			break;
		case 4:
			return interaction.reply('`Bleb~`');
			break;
		}
	},
};