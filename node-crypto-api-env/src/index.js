const Express = require('express')

const path = require('path')
const api = Express()
const {encrypt, decrypt} = require('./lib/functions')

if (!process.env.CRYPTO_PASS) throw new Error('É necessário especificar a variável de senha de criptografia')
const SECRET = process.env.CRYPTO_PASS


api.get('/encrypt', (req, res) => {
  res.json({ data: encrypt(req.query.q, SECRET)})
})

api.get('/decrypt', (req, res) => {
  res.json({data: decrypt(req.query.q, SECRET)})
})

api.listen(process.env.PORT || 8080, () => console.log(`Listening on ${process.env.PORT || 8080}`))