import app from './app.ts'
import logger from './config/logger.ts';


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`)
})












