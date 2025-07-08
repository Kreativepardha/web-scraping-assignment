/* eslint-disable @typescript-eslint/no-base-to-string */
import { createLogger, format, transports } from 'winston';
import util from 'util';
import winston from 'winston';

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
});

const consoleLogFormat = format.printf(({ level, message, timestamp, meta = {} }) => {
  return `${level} [${String(timestamp)}] ${String(message)}\nMETA: ${util.inspect(meta, { depth: null })}\n`;
});

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.json()),
  defaultMeta: { service: 'web-scraper-backend' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        consoleLogFormat
      ),
    }),
    new transports.File({ filename: 'logs/finsight-error.log', level: 'error' }),
  ],
});

export default logger;

