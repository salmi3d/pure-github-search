import React, { useContext } from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
import { GithubContext } from '../context/github/github.context'
import { Loader } from '../components/Loader'

export const Home = () => {
  const { loading, users } = useContext(GithubContext)
  return (
    <React.Fragment>
      <Search />
      {loading
        ? <Loader />
        : <div className="row">
          {users.map(user => (
            <div className="col s4 m3" key={user.id}>
              <Card user={user} />
            </div>
          ))}
        </div>
      }
    </React.Fragment>
  )
}
