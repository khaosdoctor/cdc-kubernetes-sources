const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const personName = fs.readFileSync(process.env.CONFIG_DIR + '/person.name').toString()
  res.write(`Hello ${personName}`)
  res.end()
})

server.listen(process.env.PORT)
console.log(`Ouvindo na porta ${process.env.PORT}`)
