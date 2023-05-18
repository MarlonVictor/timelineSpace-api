import fastify from 'fastify'

const app = fastify()
const apiPORT = 3333

app.get('/', () => {
  return 'Server is runnig'
})

app.listen({
  port: apiPORT,

}).then(() => {
  console.log(`⚡ HTTP server running on port ${apiPORT}`)
})