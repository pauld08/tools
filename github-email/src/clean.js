const rimraf = require('rimraf')
const { tempPath } = require('./config')

function clean () {
  return new Promise((resolve, reject) => {
    rimraf(tempPath, (err) => {
      if (err) return reject(err)

      resolve({
        ok: true
      })
    })
  })
}

module.exports = clean
