import React from 'react'
import 'materialize-css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Info } from './pages/Info'
import { Profile } from './pages/Profile'
import Alert from './components/Alert'
import { AlertState } from './context/alert/alert.state'
import { GithubState } from './context/github/github.state'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Alert type="success" text="testa" />
            <Switch>
              <Route path="/profile/:name" component={Profile} />
              <Route path="/info" component={Info} />
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App
