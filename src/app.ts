import cors from 'cors'

import express, { Application, Request, Response } from 'express'

import router from './app/routes'

const app: Application = express()

//parsers
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
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

// app.use(globalErrorHandler);

// //Not Found
// app.use(notFound);

export default app
