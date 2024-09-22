module.exports = {
    name: 'info',
    description: 'Muestra las normas del servidor.',
    execute(message, args) {
        const rulesMessage = `
        **Normas del servidor:**
        1. Sé respetuoso con los demás.
        2. No spam ni publicidad no autorizada.
        3. Sigue las instrucciones de los moderadores.
        4. Mantén el contenido apropiado.
        `;

        message.channel.send(rulesMessage);
    }
};

