module.exports = {
    name: 'ticket',
    description: 'Crea un nuevo ticket de soporte.',
    execute(message, args) {
        message.channel.send('Para crear un ticket de soporte, sigue el procedimiento en el canal de tickets.<#895814067179102208>');
    }
};
