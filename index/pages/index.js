
import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

export default function () {
  return (
    <div className="measure center pa2 pt3 pt5-ns">
      <Header title="🔨" />

      <h1>🔨</h1>

      <div className="flex flex-column">
        <label className="fw6 mb3">
          <i className="ion-social-github" /> Github
        </label>

        <Link
          href="/github-email"
        >
          <span className="f6 link dim br1 ph3 pv2 mb3 dib blue b--blue ba pointer">
            Email Finder
          </span>
        </Link>

        <Link
          href="/github-trending"
        >
          <span className="f6 link dim br1 ph3 pv2 mb2 dib blue b--blue ba pointer">
            Trending
          </span>
        </Link>
      </div>
    </div>
  )
}
