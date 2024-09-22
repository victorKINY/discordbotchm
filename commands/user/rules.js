const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'normas',
    description: 'Muestra las normas del servidor.',
    execute(message, args) {
        const rulesEmbed = new EmbedBuilder()
            .setColor('#2F3136') // Color morado
            .setTitle('`👑 Chachitos Mafia💎 Normas del servidor™️ 📜`')
            .setThumbnail("https://i.imgur.com/8Ap06Ut.png") // Agrega la URL de la imagen aquí
            .setDescription(`
                📖 \`1. Reglas de comportamiento\`
                > **1.1** Se aceptará a cualquier persona, sin importar su ideología, lugar de origen, orientación sexual, etc. 🧠
                > **1.2** Respeto hacia el resto de usuarios del servidor. 🦍
                > **1.3** Respetar la temática de los canales y su uso correspondiente. 🚦
                > **1.4** Cualquier problema comentar a <@&703095635657752576>, <@&613883155212009513> o <@&697982468329832561>
                > **1.5** Revelar información privada sobre cualquiera está totalmente prohibido.

                👤 \`2. Reglas de la cuenta\`
                > **2.1** Obligatorio cumplir con las normas establecidas por esta plataforma Discord Terms & Discord Guidelines.
                > **2.2** Se admiten solicitudes ⁠<#895814067179102208>, para solicitar \`!ayuda\` 🆘, de PC 💻, del Servidor, pertenecer Staff o para reportar alguna infracción.
                > **2.3** Hacer trampas, hackear o aprovecharse de las mecánicas del 🎮 juego está estrictamente prohibido.

                🚯 \`3. Reglas de publicidad\`
                > 3.1 Cualquier tipo de publicidad o mención a un servidor de Discord externo a éste será automáticamente eliminado. 🧹

                📈 \`4. Reglas de niveles/server\`
                > **4.1** Hacer spam constante con la intención de ganar experiencia puede llevar a una advertencia y reinicio de nivel.😵
                > **4.2** Abusar de cualquier error de un bot será motivo de expulsión temporal.

                ⚠️ \`5. Estafadores y Skins\`
                > **5.1** Ten precaución con los estafadores que intentan aprovecharse o engañar en relación con cuentas de Steam y skins.
                > **5.2** No participes ni promuevas ninguna forma de actividad fraudulenta, incluidos intercambios falsos, enlaces de phishing o esquemas fraudulentos.
                > **5.3** Informa cualquier actividad sospechosa a los moderadores del servidor de inmediato.
            `);

        message.channel.send({ embeds: [rulesEmbed] }).catch(error => {
            console.error(`Error enviando el mensaje de normas: ${error.message}`);
        });
    }
};
