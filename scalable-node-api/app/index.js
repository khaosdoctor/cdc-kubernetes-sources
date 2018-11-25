const http = require('http')

const server = http.createServer((req, res) => {
  console.log(`Chamada de ${req.headers['user-agent']}`)
  let result = 0
  let start = Date.now()
  while ((Date.now() - start) < 5000) {
    result += Math.random() * Math.random()
  }
  res.write(`Hello World do pod ${process.env.HOSTNAME}`)
  res.end()
})

server.listen(process.env.PORT)
console.log(`Ouvindo na porta ${process.env.PORT}`)
