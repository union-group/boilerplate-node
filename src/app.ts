require('dotenv/config')

import express from 'express'

import { router } from './routes'

import './database'

export const app = express()
const port = Number(process.env.PORT)

app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
