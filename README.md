<p align="center">
  <strong>👑 CHACHITOS MAFIA 💎</strong>
</p>
<p align="center">
  <strong>🌎 ¿Quiénes Somos?</strong>
</p>

<p align="center">
  En resumen, <strong>Chachitos Mafia</strong> es una comunidad de Discord para personas interesadas en juegos y soporte informático. Es un grupo amigable y acogedor que tiene como objetivo unir a personas con intereses similares y brindar ayuda mutua, así como compartir conocimientos en estas áreas.
</p>

<p align="center">
  Ofrecemos una amplia variedad de roles, recompensas por niveles, un equipo de informáticos para ayudar con cualquier problema, una sección para creadores de contenido, bots útiles y la posibilidad de crear tu propia sala para jugar con amigos.
</p>

<p align="center">
  🌐 <strong>ENLACE DE INVITACIÓN</strong> ⨭〉🔗 <a href="https://discord.gg/stwTKAw">https://discord.gg/stwTKAw</a>
</p>

<p align="center">
  <img src="https://github.com/victorKINY/discordbotchm/blob/main/walpaper%20%201080%20discord%20chachitos%20mafia.jpg" alt="WALLPAPER CHACHITOS MAFIA" />
</p>

<p align="center">
  🔗 <strong>Redes Sociales</strong>:
</p>

<p align="center">
  🔴 YouTube: <a href="https://www.youtube.com/@chachitosmafia">https://www.youtube.com/@chachitosmafia</a><br>
  🐤 Twitter: <a href="https://twitter.com/ChachitosMafia">https://twitter.com/ChachitosMafia</a><br>
  📸 Instagram: <a href="https://www.instagram.com/chachitosmafia/">https://www.instagram.com/chachitosmafia/</a><br>
  🔵 Facebook: <a href="https://www.facebook.com/chachitosmafia">https://www.facebook.com/chachitosmafia</a><br>
  🎨 Sitio web: <a href="https://victorkiny.com/chachitosmafia/">https://victorkiny.com/chachitosmafia/</a>
</p>

## 📢 Qué Ofrecemos

- **🎮 Juegos y Torneos**: Únete a partidas, participa en eventos y crea salas personalizadas.
- **👨‍💻 Soporte Técnico**: Obtén ayuda para problemas de PC y tecnología a través de nuestro sistema de tickets.
- **💡 Roles y Recompensas**: Gana experiencia y desbloquea roles y recompensas a medida que participas.
- **🔰 Sistema de Mejoras**: Apoya al servidor para obtener acceso a características exclusivas.
- **🤖 Bots y Herramientas**: Usa nuestros bots útiles para gestionar tu experiencia en el servidor.

## 📜 Roles y Rangos

Aquí tienes la lista y descripción de los roles disponibles en el servidor:

### 🔰 Roles Admin/Moderación
- 👑 Administrator™ - Administradores
- 🎪 Staff CHMafia™ - Miembros del Staff
- 👮 Moderator™ - Moderadores
- 💎 VIP Users™ - Miembros destacados

### 🎭 Autoroles Skills/Suplemento
- ⭐️ **Skills**: Roles técnicos y de destrezas (10 roles disponibles)
- 💊 **Suplemento**: Roles de preferencias personales (12 roles disponibles)

### 🏅 Rangos por Nivel (XP/LVL/RP)
- 🫅 Maestro MAX LVL 100 - Rol especial desbloqueado
- 🥷 Experto LVL 50 - Reacción personalizada desbloqueada
- 👩‍🚀 Avanzado LVL 25 - Emoticono personalizado desbloqueado
- 🧑‍⚖️ Intermedio LVL 15 - Pegatinas en ⁠⌠💭⌡general
- 🧌 Aprendiz LVL 10 - Uso de enlaces desbloqueado
- 🧟 Novato LVL 5 - Uso de emojis externos desbloqueado

### 🌟 Condecoraciones Especiales
- 🔱 Active Users™ - Miembros fundadores
- ⚡️ Server Booster - Chat premium y poderes adicionales

Para más detalles, contacta con el soporte en ⌠📩⌡ticket dentro del servidor.

## ⚙️ Cómo funciona el bot por dentro

- **Comandos por prefijo**: se cargan automáticamente desde las carpetas `ticket/` (sistema de tickets de soporte) y `commands/user/` (comandos de usuario). Cada archivo `.js` de esas carpetas se registra solo al arrancar.
- **Respuesta automática a palabras clave**: si alguien escribe "ayuda", "necesito ayuda" o "ayuda pc" en cualquier canal, el bot responde con un embed dirigiendo al rol de soporte y al canal de tickets — sin necesidad de comando.
- **Contador de mensajes por servidor**: lleva la cuenta de mensajes enviados en cada servidor donde está el bot.
- **Servidor web de estado (Express)**: sirve una página con el estado del bot (activo/iniciando), lista de servidores conectados y mensajes contados en cada uno. Su función principal es mantener el Repl despierto mediante pings externos (patrón típico de bots alojados en Replit).
- **Tarea programada (cron)**: cada 5 minutos comprueba el ping/latencia del bot en cada servidor y lo registra en consola.
- **Logs**: usa `winston` con rotación diaria de archivos (`winston-daily-rotate-file`), guardados en la carpeta `logs/`.

## 📦 Paquetes y Dependencias

- **Node.js**: versión 16 o superior.
- **Dependencias reales** (de `package.json`):
  - `discord.js` — librería principal para la API de Discord
  - `@discordjs/rest` + `discord-api-types` — utilidades de bajo nivel para la API de Discord
  - `dotenv` — variables de entorno (token del bot)
  - `express` — servidor web de estado / keep-alive
  - `node-cron` — tarea programada de comprobación de ping
  - `winston` + `winston-daily-rotate-file` — sistema de logs con rotación diaria

## 🛠️ Instalación y Configuración

### En Replit (como corre este bot actualmente)

1. Importa el repositorio en Replit ("Create Repl" → "Import from GitHub").
2. En la pestaña **Secrets** (icono de candado), añade:
   - `TOKEN` → tu token de bot de Discord
3. Pulsa **Run**. El propio `package.json`/Replit instala las dependencias automáticamente.
4. La página de estado se sirve en la URL pública que te da Replit (usa el puerto de `process.env.PORT`).

### En local (alternativa)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/victorKINY/discordbotchm.git
   cd discordbotchm
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz del proyecto (asegúrate de que está en `.gitignore`):
   ```
   TOKEN=tu_token_de_discord
   ```
4. Configura `config/config.js` con tu prefijo de comandos y el `welcomeChannelId`.
5. Arranca el bot:
   ```bash
   npm start
   ```

## 🔄 Actualizar el bot

1. Descarga los cambios más recientes:
   ```bash
   git pull origin main
   ```
2. Si hay conflictos, resuélvelos y termina la fusión:
   ```bash
   git add <archivo_resuelto>
   git commit
   ```
3. Si trabajas sobre tu propia copia, sube tus cambios:
   ```bash
   git push origin main
   ```
4. En Replit, si importaste el repo, usa el botón de sincronización con GitHub para traer los cambios.

## ❓ Problemas Comunes

### El bot no responde
- **Verifica el token**: confirma que `TOKEN` en Secrets (Replit) o `.env` (local) es correcto y no ha caducado.
- **Revisa los logs**: mira la carpeta `logs/` o la consola para errores de conexión con la API de Discord.
- **Repl dormido**: si no hay pings recientes a la página de estado, Replit puede haber puesto el proyecto a dormir — revisa el servicio externo de uptime si usas uno.

### Comando no reconocido
- Confirma que el prefijo en `config/config.js` coincide con el que estás escribiendo.
- Verifica que el archivo del comando esté en `ticket/` o `commands/user/` y no tenga errores de sintaxis (revisa la consola al arrancar, ahí se listan los fallos de carga).

### Errores al instalar dependencias
- Ejecuta `npm install` de nuevo — si persiste, borra `node_modules` y `package-lock.json` y repite.

## 📝 Recomendaciones

- **Mantén tu repositorio limpio**: elimina archivos innecesarios, solo lo relevante al proyecto.
- **Documenta tus cambios**: usa mensajes de commit descriptivos.
- **Nunca subas tu `.env` ni tu token** — confirma que `.env` está en `.gitignore` antes de cualquier commit.

<p align="center"> ¡Únete hoy mismo y sigue compartiendo y aprendiendo con nosotros! 🚀 </p>
<p align="center"> Creando, trabajando en ello, error tras error, mirando alto! </p>
<p align="center"> ¡Thank you! </p>
