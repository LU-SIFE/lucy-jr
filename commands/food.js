const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('food')
        .setDescription('Find a random food image.'),
    async execute(interaction, client, channels, message) {
        console.log('EXECUTED: FOOD');
        const embed = new EmbedBuilder()
            .setTitle('Omgggg look how yummiii~ I wanna eat it up omgg gimme the tasty~')
            .setImage('https://source.unsplash.com/featured/?food');
        return interaction.reply({ embeds: [embed] });
    }
}
