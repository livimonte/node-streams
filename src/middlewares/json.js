export async function json(req, res) {
  let rawData = ''

  for await (const bufferChunk of req) {
    rawData += bufferChunk
  }

  res.setHeader('Content-Type', 'application/json')

  try {
    req.body = rawData ? JSON.parse(rawData) : {}
  } catch (error) {
    res.writeHead(400).end(JSON.stringify({ error: 'Invalid JSON' }))
  }
}
