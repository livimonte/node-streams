import http from 'node:http'

const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.setHeader('content-type', 'application/json').end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Name',
      email: 'email@email.com',
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end('Not found')
})

server.listen(3333)

console.log('Server started at port 3333')