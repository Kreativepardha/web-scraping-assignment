import express from 'express'
import cors from 'cors'



const app = express()


app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`)
  next()
})



app.use('/api/scrape', scrapeRouter)

app.use(errorHandler)

export default app;

