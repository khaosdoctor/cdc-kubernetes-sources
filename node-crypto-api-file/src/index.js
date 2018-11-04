const Express = require('express')

const path = require('path')
const api = Express()
const {encrypt, decrypt} = require('./lib/functions')

if (!process.env.SECRET_VOLUME_DIR) throw new Error('É necessário especificar a variável de montagem do volume')
const SECRET_PATH = path.resolve(path.join(process.env.SECRET_VOLUME_DIR, process.env.SECRET_VOLUME_FILENAME))


api.get('/encrypt', (req, res) => {
  res.json({ data: encrypt(req.query.q, SECRET_PATH)})
})

api.get('/decrypt', (req, res) => {
  res.json({data: decrypt(req.query.q, SECRET_PATH)})
})

api.listen(process.env.PORT || 8080, () => console.log(`Listening on ${process.env.PORT || 8080}`))