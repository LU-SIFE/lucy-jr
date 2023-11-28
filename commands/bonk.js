const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bonk')
		.setDescription('If horni, then bonk')
		.addUserOption(option => option.setName('target').setDescription('The user who is horni')),
	async execute(interaction) {
		if (interaction.options.getUser('target')) {
			console.log(`Executed: BONK - ${interaction.options.getUser('target')}`);

			switch(Math.floor(Math.random() * 4 + 1)) {
			case 1:
				return interaction.reply(`:anchor: ${interaction.options.getUser('target')} get fucking bonked`);
				break;
			case 2:
				return interaction.reply(`:cricket_game: No more horni ${interaction.options.getUser('target')}!`);
				break;
			case 3:
				return interaction.reply(`:boomerang: ${interaction.options.getUser('target')}, *Bonk~*`);
				break;
			case 4:
				return interaction.reply(`${interaction.options.getUser('target')}, Get bonked :boxing_glove:`);
				break;
			}
		}

		console.log('EXECUTED: BONK - SELF');
		switch(Math.floor(Math.random() * 4 + 1)) {
		case 1:
			return interaction.reply(`:anchor: horniness will not be tolerated`);
			break;
		case 2:
			return interaction.reply(`:cricket_game: BONK`);
			break;
		case 3:
			return interaction.reply('No horni, get bonked :boomerang:');
			break;
		case 4:
			return interaction.reply(`:boxing_glove: get *Bonked~*`);
			break;
		}
	},
};