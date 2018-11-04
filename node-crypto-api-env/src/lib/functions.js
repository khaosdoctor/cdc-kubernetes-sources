const crypto = require('crypto')
const CIPHER_ALGORITH = 'aes-256-cbc'

function encrypt (data, secretString) {
  const cipherPass = secretString
  const cipher = crypto.createCipher(CIPHER_ALGORITH, cipherPass)
  const encodedData = cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
  return encodedData
}

function decrypt (data, secretString) {
  const cipherPass = secretString
  const decipher = crypto.createDecipher(CIPHER_ALGORITH, cipherPass)
  const decodedData = decipher.update(data, 'hex', 'utf8') + decipher.final('utf8')
  return decodedData
}

module.exports = {
  encrypt,
  decrypt
}