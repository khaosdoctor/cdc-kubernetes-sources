const crypto = require('crypto')
const fs = require('fs')
const CIPHER_ALGORITH = 'aes-256-cbc'

function getFileContents (path) {
  return fs.readFileSync(path).toString()
}

function getPassword (path) {
  const password = getFileContents(path)
  const cryptoPass = crypto.createHash('md5').update(password, 'utf-8').digest('hex').toUpperCase()
  return cryptoPass
}

function encrypt (data, secretPath) {
  const cipherPass = getPassword(secretPath)
  const cipher = crypto.createCipher(CIPHER_ALGORITH, cipherPass)
  const encodedData = cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
  return encodedData
}

function decrypt (data, secretPath) {
  const cipherPass = getPassword(secretPath)
  const decipher = crypto.createDecipher(CIPHER_ALGORITH, cipherPass)
  const decodedData = decipher.update(data, 'hex', 'utf8') + decipher.final('utf8')
  return decodedData
}

module.exports = {
  encrypt,
  decrypt
}