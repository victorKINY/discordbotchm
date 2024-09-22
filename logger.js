const winston = require('winston');
require('winston-daily-rotate-file'); // Asegúrate de instalar este paquete

// Configuración del logger
const transport = new winston.transports.DailyRotateFile({
  filename: 'logs/%DATE%-combined.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d'
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Muestra logs en la consola
    transport // Guarda logs en archivos rotativos
  ],
});

module.exports = logger;
