module.exports = {
    name: 'server',
    description: 'Proporciona información sobre el servidor.',
    execute(message, args) {
        const serverMessage = `**Información del servidor:**
        - **Nombre:** Chachitos Mafia
        - **Descripción:** Comunidad de jugadores y soporte técnico.
        - **Miembros:** ${message.guild.memberCount}
        `;

        message.channel.send(serverMessage);
    }
};
