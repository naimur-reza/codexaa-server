import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'
import { globalErrorHandler, notFound } from './app/middlewares/errorHandler'

const app: Application = express()

//parsers
app.use(express.json())
app.use(
  cors({
    origin: 'https://codexaa-frontend-sigma.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)
 

// application routes
app.use('/api/v1', router)

const defaultRoute = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Server is running!'
  })
}

app.get('/', defaultRoute)

// Global error handler
app.use(globalErrorHandler)

// Not Found handler
app.use(notFound)

export default app
