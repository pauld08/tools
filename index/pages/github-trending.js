
import React, { Component } from 'react'
import Header from '../components/Header'
import RepoList from '../components/RepoList'
import Link from 'next/link'
import axios from 'axios'

const options = [{
  id: 0,
  name: 'Top Daily JavaScript',
  params: '?language=javascript&daysAgo=2'
}, {
  id: 1,
  name: 'Top Weekly JavaScript',
  params: '?language=javascript'
}, {
  id: 5,
  name: 'Top Monthly JavaScript',
  params: '?language=javascript&daysAgo=31'
}, {
  id: 2,
  name: 'Top Weekly Golang',
  params: '?language=go'
}, {
  id: 3,
  name: 'Top Weekly Overall',
  params: ''
}, {
  id: 4,
  name: 'Top Monthly Overall',
  params: '?daysAgo=31'
}]

class GithubTrending extends Component {

  constructor (props) {
    super(props)
    this.state = {
      queryOption: options[0],
      repos: null
    }
  }

  componentDidMount () {
    this.fetchRepos()
  }

  render () {
    const {
      loading,
      error,
      repos
    } = this.state

    return (
      <div>
        <Header title="Github Trending" />

        <div>
          <div className="measure center pa2 pv5">
            <Link
              href="/"
            >
              <span className="f6 link dim br1 ph3 pv2 mb2 dib blue b--blue ba pointer">
                &larr; Back
              </span>
            </Link>

            <h1 className="fw5">Github Trending</h1>

            {this._renderQueryOptions()}

            {loading && (
              <div className="pa3">
                Loading...
              </div>
            )}

            {!loading && repos && (
              <RepoList repos={repos} />
            )}
          </div>
        </div>
      </div>
    )
  }

  fetchRepos = (ev) => {
    if (ev) {
      ev.preventDefault()
      ev.stopPropagation()
    }

    const { repos, queryOption } = this.state
    const endpointHost = 'https://github-trending.now.sh'

    this.setState({
      loading: true,
      error: false
    })

    axios.get(endpointHost + queryOption.params)
      .then(res => {
        this.setState({
          repos: res.data.repos,
          loading: false,
          error: false
        })
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true
        })
      })
  }

  _renderQueryOptions = () => {
    const current = this.state.queryOption

    return (
      <div>
        <h3 className="mb2">Search Options</h3>
        {options.map(option => (
          <span
            className="db"
            key={'query-option-' + option.id}
          >
            <input
              type="radio"
              name="github-trending-query"
              className="ma2 mt0"
              id={`gtq-${option.id}`}
              value={option.id}
              checked={option.id === current.id}
              onChange={() => {
                this.setState({ queryOption: option })
                setTimeout(() => this.fetchRepos(), 0)
              }}
            />
            <label
              htmlFor={`gtq-${option.id}`}
              style={{userSelect: 'none'}}
            >{option.name}</label>
          </span>
        ))}
      </div>
    )
  }
}

export default GithubTrending
