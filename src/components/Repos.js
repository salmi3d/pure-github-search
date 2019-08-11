import React from 'react'

export const Repos = ({ repos }) => (
  <div className="row flex">
    {
      repos.map(repo => (
        <div key={repo.id} className="flex-1 col s12 m6">
          <div className="flex-2 card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{repo.name}</span>
              <p>{repo.description}</p>
            </div>
            <div className="card-action">
              <a rel="noopener noreferrer" target="_blank" href={repo.html_url}>Open</a>
            </div>
          </div>
        </div>
      ))
    }
  </div>
)


