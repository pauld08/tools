
import React, { Component } from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import axios from 'axios'

class GithubEmail extends Component {

  constructor (props) {
    super(props)
    this.state = {
      repo: '',
      email: ''
    }
  }

  render () {
    const {
      repo,
      email
    } = this.state

    return (
      <div>
        <Header title="Github Email Finder" />

        <form onSubmit={this.fetchEmailFromRepo}>
          <div className="measure center pt5">
            <Link
              href="/"
            >
              <span className="f6 link dim br1 ph3 pv2 mb2 dib blue b--blue ba pointer">
                &larr; Back
              </span>
            </Link>

            <h1 className="fw5">Github Email Finder</h1>

            <label htmlFor="comment" className="f6 b db mb2">
              Repository Name
            </label>
            <input
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              placeholder="fouad/fireworks"
              onChange={this._onRepoChange}
            />
            <small className="f6 black-60 db mb2">
              Enter the {`user's repo`}, e.g. <code>fouad/fireworks</code>.
            </small>
            <button className="f6 link dim br1 ph3 pv2 mb2 dib white bg-blue bn pointer">
              Find email
            </button>

            {email ? (
              <div>
                <strong>{email}</strong>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    )
  }

  _onRepoChange = (ev) => {
    this.setState({
      repo: ev.target.value
    })
  }

  fetchEmailFromRepo = (ev) => {
    if (ev) {
      ev.preventDefault()
      ev.stopPropagation()
    }

    const { repo } = this.state
    const endpointHost = 'https://github-email-uchjnsbwjo.now.sh/'

    this.setState({
      email: 'Loading...'
    })

    axios.get(endpointHost + repo)
      .then(res => {
        console.log(res)
        this.setState({
          email: res.data
        })
      })
      .catch(err => {
        this.setState({
          email: err.toString()
        })
      })
  }
}

export default GithubEmail
