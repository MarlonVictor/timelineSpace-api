import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'

import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'


const app = fastify()
const apiPORT = 3333

app.register(cors, {
  origin: true
})

app.register(jwt, {
  secret: '2^uRhd7&cBQ!Le24rNc$'
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(multipart)

app.register(uploadRoutes)
app.register(memoriesRoutes)
app.register(authRoutes)

app.listen({
  port: apiPORT,

}).then(() => {
  console.log(`⚡ HTTP server running on port ${apiPORT}`)
})