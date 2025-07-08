import express from 'express'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler'
import logger from './config/logger'
import mainRouter from './routes/index.routes'


const app = express()


app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`)
  next()
})



app.use('/api/v1', mainRouter)

app.use(errorHandler)

export default app;

