import fastify from 'fastify'

import { memoriesRoutes } from './routes/memories'


const app = fastify()
const apiPORT = 3333

app.register(memoriesRoutes)

app.listen({
  port: apiPORT,

}).then(() => {
  console.log(`⚡ HTTP server running on port ${apiPORT}`)
})