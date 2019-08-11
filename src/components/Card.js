import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ user }) => (
  <div className="card">
    <div className="card-image">
      <img src={user.avatar_url} alt={user.login} />
    </div>
    <div className="card-content">
      <span className="card-title">{user.login}</span>
    </div>
    <div className="card-action">
      <Link to={`/profile/${user.login}`}>Open</Link>
    </div>
  </div>
)
