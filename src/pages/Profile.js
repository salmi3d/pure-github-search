import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/github.context'
import { Loader } from '../components/Loader'
import { Link } from 'react-router-dom'
import { Repos } from '../components/Repos'

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const nickname = match.params.name

  useEffect(() => {
    getUser(nickname)
    getRepos(nickname)
  }, [])

  if (loading) {
    return <Loader />
  }

  const {
    name, company, avatar_url,
    location, bio, blog, login,
    html_url, following, followers,
    public_repos, public_gists
  } = user

  return (
    <React.Fragment>
      <div className="row">
        <div className="col s4">
          <img style={{ maxWidth: '100%' }} src={avatar_url} alt={name} />
          {location && <p className="flow-text"><strong>Location</strong>: {location}</p>}
          <Link className="btn waves-effect waves-light" to="/">Go home<i className="material-icons right">send</i></Link>
        </div>
        <div className="col s8">
          <h1 style={{ marginTop: 0 }}>{name}</h1>
          {bio && <p className="flow-text"><strong>BIO</strong>: {bio}</p>}
          <p><strong>Profile</strong>: <a rel="noopener noreferrer" target="_blank" href={html_url}>{html_url}</a></p>
          {login && <p><strong>Username</strong>: {login}</p>}
          {company && <p><strong>Company</strong>: {company}</p>}
          {blog && <p><strong>Website</strong>: {blog}</p>}
          <ul className="collapsible">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">group_add</i> Followers
                <span className="badge"> {followers}</span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">add_alert</i> Following
                <span className="badge">{following}</span></div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">code</i> Public repositories
                <span className="badge">{public_repos}</span></div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">clear_all</i> Public gists
                <span className="badge">{public_gists}</span></div>
            </li>
          </ul>
        </div>
      </div>
      <Repos repos={repos} />
    </React.Fragment>
  )
}
