const { EmbedBuilder } = require('discord.js');
const { prefix } = require('../../config/config'); // Asegúrate de que la ruta sea correcta

module.exports = {
    name: 'ayuda',
    description: 'Muestra una lista de los comandos disponibles.',
    execute(message, args, client) {
        const helpEmbed = new EmbedBuilder()
            .setColor('#6a0dad') // Color morado
            .setTitle('Comandos Disponibles')
            .setDescription(`
                Aquí tienes una lista de los comandos disponibles:
                🆘 **${prefix}ayuda** - Muestra esta ayuda.
                📩 **${prefix}ticket** - Crea un nuevo ticket de soporte.
                ℹ️ **${prefix}info** - Proporciona información sobre el servidor.
                📜 **${prefix}normas** - Muestra las normas del servidor.
                🔰 **${prefix}roles** - Lista y describe los roles disponibles en el servidor.
                💬 **${prefix}server** - Da información sobre el servidor y sus características.
                🌐 **${prefix}comunidad** - Proporciona guías, redes sociales y otros recursos comunitarios.
                🔒 **${prefix}seguridad** - Ofrece consejos de seguridad y procedimientos de ayuda.
                Si necesitas ayuda adicional, por favor contacta con el soporte.
            `)
            .setFooter({ text: 'Si necesitas más ayuda, no dudes en contactarnos.' });

        message.channel.send({ embeds: [helpEmbed] }).catch(error => {
            console.error(`Error enviando el mensaje de ayuda: ${error.message}`);
        });
    }
};
