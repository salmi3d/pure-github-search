import React from 'react'
import 'materialize-css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Info } from './pages/Info'
import { Profile } from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/profile/:name" component={Profile} />
          <Route path="/info" component={Info} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
