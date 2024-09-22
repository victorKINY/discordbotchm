const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prueba')
        .setDescription('Este es un comando de prueba.'),
    async execute(interaction) {
        await interaction.reply('¡Este es un comando de prueba!');
    },
};
