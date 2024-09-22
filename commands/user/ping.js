module.exports = {
    name: 'ping',
    description: 'Responde con el tiempo de latencia del bot.',
    async execute(message, args, client) {
        const sentMessage = await message.channel.send('Pong!');
        const latency = sentMessage.createdTimestamp - message.createdTimestamp;
        const apiLatency = Math.round(client.ws.ping);

        // Envía la respuesta con el tiempo de latencia
        message.channel.send(`🏓 Latencia del mensaje: ${latency}ms\n🌐 Latencia de la API: ${apiLatency}ms`);
    }
};
