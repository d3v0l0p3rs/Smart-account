import React from 'react'
import './App.css'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { HomeComponent, NavComponent } from './components/index'

const history = createBrowserHistory()

function Contact() {
  return <h2>Contact</h2>
}

function Blog() {
  return <h2>Blog</h2>
}

const App: React.FC = (): JSX.Element => {
  return (
    <Router history={history}>
      <div>
        <NavComponent />
      </div>
      <div>
        <Switch>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
