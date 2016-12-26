const Git = require('nodegit')
const { tempPath, cloneOptions } = require('./config')

function clone ({ url, localPath }) {
  return new Promise((resolve, reject) => {
    if (!url) {
      return reject(new Error('Missing `url` for `clone`'))
    }

    if (!localPath) {
      return reject(new Error('Missing `localPath` for `clone`'))
    }

    const promise = Git.Clone(url, tempPath + localPath, cloneOptions)

    console.log('Cloning',url,'into',localPath)

    return promise.then(resolve).catch(reject)
  })
}

module.exports = clone
