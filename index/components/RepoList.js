
import React from 'react'

export const RepoList = ({ repos }) => (
  <div className="mt3">
    {repos.map(repo => (
      <div key={'repo-' + repo.id} className="pa2 pb3 bt b--light-gray">
        <div>
          <a
            href={repo.html_url}
            target="_blank"
            className="no-underline"
          >
            <div className="mb2 flex flex-row justify-between">
              <h2 className="ma0 f4 v-mid dim" style={{maxWidth: '24rem'}}>
                <span className="underline-hover">{repo.name}</span>
                <span className="dib ml1 f6 fw5 gray">
                  {repo.language}
                </span>
              </h2>
              <div className="v-mid">
                <span>
                  <i className="gray ion-fork mr2" />
                  {repo.forks_count}
                </span>
                <span>
                  <i className="yellow ion-android-star mh2" />
                  {repo.stargazers_count}
                </span>
              </div>
            </div>
          </a>
          <p className="mt1 gray">{repo.description}</p>
          <a
            href={repo.owner.html_url}
            className="dark-gray no-underline underline-hover dim"
          >
            <div className="flex flex-row">
              <img src={repo.owner.avatar_url} className="w1 h1 br2" />
              <span className="db fw6 f5 ml2" style={{lineHeight: 1}}>{repo.owner.login}</span>
            </div>
          </a>
        </div>
      </div>
    ))}
  </div>
)

export default RepoList
