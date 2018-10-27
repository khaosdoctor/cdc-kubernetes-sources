const Express = require('express')
const fs = require('fs')
const path = require('path')
const {format} = require('util')
const app = Express()

const dirLocation = process.env.COUNTER_DIRECTORY
const MESSAGE = 'Olá %s! Você já acessou essa página %d vezes'

app.get('/favicon.ico', (req, res) => res.status(204))

app.get('/:username', (req, res) => {
  const filePath = path.resolve(path.join(dirLocation, `${req.params.username}.json`))
  console.log(fs.existsSync(filePath), filePath)

  if(!fs.existsSync(filePath)) {
    if (!fs.existsSync(dirLocation)) fs.mkdirSync(dirLocation)
    fs.writeFileSync(filePath, JSON.stringify({count: 1}))
    return res.send(format(MESSAGE, req.params.user, 1))
  }

  const fileContents = JSON.parse(fs.readFileSync(filePath).toString())
  const newCount = fileContents.count + 1

  fs.writeFileSync(filePath, JSON.stringify({count: newCount}))
  return res.send(format(MESSAGE, req.params.user, newCount))
})

app.listen(process.env.PORT, () => console.log(`Ouvindo na porta ${process.env.PORT}`))