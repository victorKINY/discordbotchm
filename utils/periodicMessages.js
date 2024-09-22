const { EmbedBuilder } = require('discord.js');
const { prefix, enablePeriodicMessages } = require('../config/config'); // Asegúrate de que la ruta sea correcta

// Configuración del mensaje periódico
const MESSAGE_INTERVAL = 72 * 60 * 60 * 1000; // 72 horas en milisegundos

module.exports = {
    setupPeriodicMessages(client) {
        if (!enablePeriodicMessages) {
            console.log('Mensajes periódicos están desactivados.');
            return; // Salir si los mensajes periódicos están desactivados
        }

        const channelId = '1099141975300636733'; // Reemplaza con el ID del canal donde quieres enviar el mensaje

        // Función para enviar el mensaje de ayuda
        const sendHelpMessage = async () => {
            const channel = client.channels.cache.get(channelId);
            if (!channel) {
                console.error(`Canal con ID ${channelId} no encontrado.`);
                return;
            }

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
                    Si necesitas ayuda adicional, por favor contacta con el soporte <#895814067179102208>.
                `)
                .setFooter({ text: 'Si necesitas más ayuda, no dudes en contactarnos.' });

            channel.send({ embeds: [helpEmbed] }).catch(error => {
                console.error(`Error enviando el mensaje de ayuda: ${error.message}`);
            });
        };

        // Enviar el primer mensaje inmediatamente
        sendHelpMessage();

        // Configurar el intervalo para enviar el mensaje periódicamente
        setInterval(sendHelpMessage, MESSAGE_INTERVAL);
    }
};
