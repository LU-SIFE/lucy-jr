const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uwu')
		.setDescription('*Replies with UwUs~*'),
	async execute(interaction) {
		console.log('EXECUTED: UWU');
		switch(Math.floor(Math.random() * 6 + 1)) {
		case 1:
			return interaction.reply('UwU~');
			break;
		case 2:
			return interaction.reply('*OWO*');
			break;
		case 3:
			return interaction.reply('**OmO**');
			break;
		case 4:
			return interaction.reply('^-^');
			break;
		case 5:
			return interaction.reply('**XwX**');
			break;
		case 6:
			return interaction.reply('*TwT*');
			break;
		}
	},
};