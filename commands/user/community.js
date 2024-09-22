module.exports = {
    name: 'comunidad',
    description: 'Proporciona guías, redes sociales y otros recursos comunitarios.',
    execute(message, args) {
        const communityMessage = `**Guías y Redes Sociales:**
        - **Guías:** [Enlace a guías]
        - **Redes Sociales:** [Enlace a redes sociales]
        `;

        message.channel.send(communityMessage);
    }
};
