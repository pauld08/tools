const express = require('express')
const cors = require('cors')
const getEmailFromRepo = require('./src')

const app = express()

const repoRegex = /.*\/.*/
let semaphore = false

app.use(cors())

app.get('*', function (req, res) {
  const repo = req.path.substring(1)

  if (!repoRegex.test(repo)) {
    return res.send('Invalid repo path')
  }

  if (semaphore) {
    return res.send('Already fetching a repo, please wait a moment')
  }

  semaphore = true

  getEmailFromRepo(repo)
    .then(email => {
      semaphore = false
      return res.send(email)
    })
    .catch(err => {
      semaphore = false
      return res.send(err.toString())
    })
})

app.listen(8888)
