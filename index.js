const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Para usar el token desde las variables de entorno
const { prefix, welcomeChannelId } = require('./config/config'); // Asegúrate de que el welcomeChannelId esté definido
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const logDir = path.join(__dirname, 'logs');

// Crear el directorio de logs si no existe
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Map();
const serverMessageCounts = new Map(); // Variable para contar mensajes por servidor

// Cargar comandos desde la carpeta 'ticket'
const ticketCommandFiles = fs.readdirSync(path.join(__dirname, 'ticket')).filter(file => file.endsWith('.js'));
for (const file of ticketCommandFiles) {
    try {
        const command = require(`./ticket/${file}`);
        client.commands.set(command.name, command);
    } catch (error) {
        console.error(`Error cargando el comando desde ticket/${file}: ${error.message}`);
    }
}

// Cargar comandos desde la carpeta 'commands/user'
const userCommandFiles = fs.readdirSync(path.join(__dirname, 'commands/user')).filter(file => file.endsWith('.js'));
for (const file of userCommandFiles) {
    try {
        const command = require(`./commands/user/${file}`);
        client.commands.set(command.name, command);
    } catch (error) {
        console.error(`Error cargando el comando desde commands/user/${file}: ${error.message}`);
    }
}

// Importar la función de mensajes periódicos
const { setupPeriodicMessages } = require('./utils/periodicMessages');

let lastActive = new Date();
let botReady = false;

client.once('ready', () => {
    console.log(`¡Bot está conectado como ${client.user.tag}!`);
    lastActive = new Date(); // Actualizar la última actividad
    botReady = true; // Marcar el bot como listo

    // Configurar los mensajes periódicos
    setupPeriodicMessages(client);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    // Lógica para comandos
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName);
        if (command) {
            try {
                command.execute(message, args, client); // Pasar el cliente aquí
            } catch (error) {
                console.error(`Error ejecutando el comando ${commandName}: ${error.message}`);
                message.reply('Hubo un error al ejecutar este comando.');
            }
        } else {
            message.reply('Comando no encontrado.');
        }
    }

    // Respuesta a palabras clave
    const helpKeywords = ['ayuda', 'necesito ayuda', 'ayuda pc'];
    if (helpKeywords.some(keyword => message.content.toLowerCase().includes(keyword))) {
        const helpEmbed = new EmbedBuilder()
            .setColor('#6a0dad') // Color morado
            .setTitle('Comando/AYUDA 🆘 ')
            .setDescription(`Si necesitas **contactar** con el 🧑‍💻soporte del **servidor**: <@&703095635657752576>, puedes **crear** una **Incidencia** en: <#895814067179102208>, donde podrás indicar los detalles del problema`)
            .setFooter({ text: 'Si necesitas más ayuda, no dudes en contactarnos.' });

        message.channel.send({ embeds: [helpEmbed] }).catch(error => {
            console.error(`Error enviando el mensaje de ayuda: ${error.message}`);
        });
    }

    // Actualizar el contador de mensajes por servidor
    const serverId = message.guild.id;
    if (!serverMessageCounts.has(serverId)) {
        serverMessageCounts.set(serverId, 0);
    }
    serverMessageCounts.set(serverId, serverMessageCounts.get(serverId) + 1);
});

// Configurar la ruta principal del servidor Express
app.get('/', (req, res) => {
    try {
        if (!botReady) {
            return res.send(`
                <html>
                  <head>
                    <style>
                      body {
                        text-align: center;
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                      }
                      h1 {
                        color: #333;
                      }
                      p {
                        font-size: 18px;
                        color: #666;
                      }
                      .error {
                        color: red;
                      }
                    </style>
                  </head>
                  <body>
                    <h1>Bot Status</h1>
                    <p style="font-size: 24px;">🔴 Bot is initializing...</p>
                    <p>Please wait until the bot is ready.</p>
                  </body>
                </html>
            `); // Mostrar un mensaje si el bot no está listo
        }

        const serverList = Array.from(client.guilds.cache.values())
            .map(guild => {
                const messageCount = serverMessageCounts.get(guild.id) || 0;
                return `<li class="server-item">${guild.name} (ID: ${guild.id}) - Mensajes enviados: ${messageCount}</li>`;
            })
            .join('');

        res.send(`
            <html>
              <head>
                <style>
                  body {
                    text-align: center;
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                  }
                  h1 {
                    color: #333;
                  }
                  p {
                    font-size: 18px;
                    color: #666;
                  }
                  ul {
                    list-style: none;
                    padding: 0;
                  }
                  .server-item {
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    margin: 10px 0;
                    padding: 10px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                  }
                </style>
                <script>
                  function fetchStatus() {
                    fetch('/')
                      .then(response => response.text())
                      .then(html => {
                        document.open();
                        document.write(html);
                        document.close();
                      })
                      .catch(error => {
                        document.body.innerHTML = '<p class="error">Error fetching status: ' + error.message + '</p>';
                      });
                  }
                  setInterval(fetchStatus, 60000); // Actualizar cada 60 segundos
                </script>
              </head>
              <body>
                <h1>Bot Status</h1>
                <p style="font-size: 24px;">🟢 Bot is running!</p>
                <p>Last activity: ${lastActive.toLocaleString()}</p>
                <p>Total Servers: ${client.guilds.cache.size}</p>
                <h2>Servers and Message Counts:</h2>
                <ul>${serverList}</ul>
                <p>Bot Name: ${client.user.tag}</p>
                <p>Bot ID: ${client.user.id}</p>
                <p>Node.js Version: ${process.version}</p>
              </body>
            </html>
        `);
    } catch (error) {
        res.send(`
            <html>
              <head>
                <style>
                  body {
                    text-align: center;
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                  }
                  h1 {
                    color: #333;
                  }
                  p {
                    font-size: 18px;
                    color: #666;
                  }
                  .error {
                    color: red;
                  }
                </style>
              </head>
              <body>
                <h1>Error</h1>
                <p class="error">Error fetching status: ${error.message}</p>
              </body>
            </html>
        `);
    }
});

// Iniciar el servidor Express
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Iniciar sesión con el bot usando el token de las variables de entorno
client.login(process.env.TOKEN).catch(error => {
    console.error(`Error al iniciar sesión con el bot: ${error.message}`);
});

const cron = require('node-cron');

cron.schedule('*/5 * * * *', async () => {
    console.log('Running Cron Job test ping cada 5m...');

    try {
        const guilds = client.guilds.cache.map(guild => guild.id);
        const pings = await Promise.all(guilds.map(async guildId => {
            const guild = client.guilds.cache.get(guildId);
            if (guild) {
                return guild.shard.ping; // Obtén el ping del shard
            }
            return 'N/A'; // En caso de que no se pueda obtener el ping
        }));

        pings.forEach((ping, index) => {
            console.log(`Ping for guild ${guilds[index]}: ${ping}ms`);
        });

    } catch (error) {
        console.error(`Error al obtener el ping: ${error.message}`);
    }
});