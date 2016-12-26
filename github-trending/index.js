
const LRU =  require('hashlru')
const debug = require('debug')('@fouad/github-trending')
const { send } = require('micro')
const { get } = require('axios')
const { stringify } = require('querystring')
const { parse: parseURL } = require('url')

let cache = LRU(20)
const getSearchURL = searchParams => (
  'https://api.github.com/search/repositories?' + searchParams
)

module.exports = async (req, res) => {
  cors(res)

  const params = parseURL(req.url, true).query || {}
  const daysAgo = params.daysAgo || 7
  const language = params.language ? (
    ` language:${params.language}`
  ) : ''

  if (params.bust) {
    cache = LRU(20)
  }

  const startDate = new Date()
  startDate.setDate(startDate.getDate() - daysAgo)
  const startDateString = `
    ${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}
  `.trim()

  const searchParams = stringify({
    q: 'created:>' + startDateString + language,
    sort: 'stars',
    order: 'desc'
  })
  const searchURL = getSearchURL(searchParams)

  return {
    repos: await loadRepos(searchURL)
  }
}

const cors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
}

const loadRepos = async (searchURL) => {
  if (cache.get(searchURL)) {
    debug('cache hit', { searchURL, result: cache.get(searchURL).length })
    return new Promise((resolve, reject) => resolve(cache.get(searchURL)))
  }

  debug('cache miss', { searchURL })

  return get(searchURL, {
    headers: {
      Accept: 'application/vnd.github.preview'
    }
  }).then(res => res.data)
    .then(data => {
      cache.set(searchURL, data.items)
      return data.items
    })
}
