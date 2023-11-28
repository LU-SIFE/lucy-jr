const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug someone, or yourself if you need it.')
		.addUserOption(option => option.setName('target').setDescription('The user to hug~')),
	async execute(interaction) {
		if (interaction.options.getUser('target')) {
			console.log(`Executed: HUG - ${interaction.options.getUser('target')}`);

			switch(Math.floor(Math.random() * 4 + 1)) {
			case 1:
				return interaction.reply(`:people_hugging: ${interaction.options.getUser('target')} is wonderful~`);
				break;
			case 2:
				return interaction.reply(`:people_hugging: Have a wonderful day, ${interaction.options.getUser('target')}!~`);
				break;
			case 3:
				return interaction.reply(`:people_hugging: ${interaction.options.getUser('target')}, everything is alright~`);
				break;
			case 4:
				return interaction.reply(`${interaction.options.getUser('target')}, Have a hug~ :people_hugging:`);
				break;
			}
		}

		console.log('EXECUTED: HUG - SELF');
		switch(Math.floor(Math.random() * 4 + 1)) {
		case 1:
			return interaction.reply(`*hug* :people_hugging: you are doing great today!`);
			break;
		case 2:
			return interaction.reply(`You are doing your best! :people_hugging:`);
			break;
		case 3:
			return interaction.reply('Have a warm hug~ :people_hugging:');
			break;
		case 4:
			return interaction.reply(`Everything is going to be alright! :people_hugging:`);
			break;
		}
	},
};