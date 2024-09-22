const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'roles',
    description: 'Lista y describe los roles disponibles en el servidor.',
    execute(message, args) {
        const rolesEmbed = new EmbedBuilder()
            .setColor('#6a0dad') // Color morado
            .setTitle('Información de Roles y Rangos del Servidor™️')
            .setDescription(`
                \`🔰 Roles Admin/Moderación:\`
                - <@&697982468329832561> - Administradores
                - <@&613883155212009513> - Miembros del Staff
                - <@&703095635657752576> - Moderadores
                - <@&796961621108195339> - Miembros destacados

                \`🎭 Autoroles Skills/Suplemento:\`
                - ⭐️ **Skills:** Roles técnicos y de destrezas, ej. <@&796884885725904966>, <@&708810990522859540>. (10 roles disponibles)
                - 💊 **Suplemento:** Roles de preferencias personales, ej. <@&797283120813965333>, <@&1072973169457111192>. (12 roles disponibles)

                \`🏅 Rangos por Nivel (XP/LVL/RP):\`
                - <@&984254324500725813> - Rol especial desbloqueado
                - <@&984254290145206302> - Reacción personalizada desbloqueada
                - <@&984254244028809266> - Emoticono personalizado desbloqueado
                - <@&984254221341839400> - Pegatinas en ⁠⌠💭⌡general
                - <@&984254186482982993> - Uso de enlaces desbloqueado
                - <@&984253992605454377> - Uso de emojis externos desbloqueado
                
                ● ⁉️ **Se gana +RP💱 participando activamente en el servidor. Puedes obtener experiencia escribiendo en los canales y también mediante actividad en voz.**

                \`🌟 Condecoraciones Especiales:\`
                - <@&1119998616493367318> - Para los miembros fundadores
                - <@&703156101692260424> - Desbloquea chat premium y poderes adicionales

                ● Para más ayuda, 🧏 contacta con el soporte ➜ ⁠<#895814067179102208>
            `)
            .setFooter({ text: 'Gracias | Copyright © 2024 All rights reserved by victorKINY.com' });

        message.channel.send({ embeds: [rolesEmbed] }).catch(error => {
            console.error(`Error enviando el mensaje de roles: ${error.message}`);
        });
    }
};
