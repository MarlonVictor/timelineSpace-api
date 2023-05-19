import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'


const app = fastify()
const apiPORT = 3333

app.register(cors, {
  origin: true
})

app.register(jwt, {
  secret: '2^uRhd7&cBQ!Le24rNc$'
})

app.register(memoriesRoutes)
app.register(authRoutes)

app.listen({
  port: apiPORT,

}).then(() => {
  console.log(`⚡ HTTP server running on port ${apiPORT}`)
})