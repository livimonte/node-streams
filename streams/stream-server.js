import http from 'node:http'

const server = http.createServer(async (req, res) => {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const streamContent = Buffer.concat(buffers).toString()

  return res.end(streamContent)
})

server.listen(3334)

console.log('Server started at port 3334')
