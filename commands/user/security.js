module.exports = {
    name: 'seguridad',
    description: 'Proporciona consejos de seguridad y procedimientos de ayuda.',
    execute(message, args) {
        const securityMessage = `**Consejos de seguridad:**
        - No compartas información personal.
        - Usa contraseñas fuertes y únicas.
        - Reporta cualquier comportamiento sospechoso.
        `;

        message.channel.send(securityMessage);
    }
};
