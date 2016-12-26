const Git = require('nodegit')
const clone = require('./clone')
const clean = require('./clean')

const getMostRecentCommit = (repo) => {
  return repo.getBranchCommit('master')
}
const getCommitAuthorEmail = (commit) => {
  return commit.author().email()
}

module.exports = function (repo) {
  return new Promise((resolve, reject) => {
    clean()
      .catch(reject)
      .then(() => {
        clone({
          url: 'https://github.com/' + repo,
          localPath: repo
        })
          .catch(reject)
          .then(getMostRecentCommit)
          .then(getCommitAuthorEmail)
          .then(email => {
            clean()
            return email
          })
          .then(resolve)
      })
  })
}
