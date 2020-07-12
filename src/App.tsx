import React from 'react'
import './App.css'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {
  NavComponent,
  HeaderComponent,
  HomeComponent,
  ContactComponent,
} from './components/index'

const history = createBrowserHistory()

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
        <HeaderComponent />
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
            <ContactComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
