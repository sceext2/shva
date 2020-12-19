import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import Home from './home'
import Open from './open'
import Record from './record'
import Cut from './cut'
import Freq from './freq'
import Realtime from './realtime'
import Change from './change'
import Config from './config'
import About from './about'

function App() {
  return (
    <div className="app-root">
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/open">
            <Open />
          </Route>
          <Route path="/record">
            <Record />
          </Route>
          <Route path="/cut">
            <Cut />
          </Route>
          <Route path="/freq">
            <Freq />
          </Route>
          <Route path="/realtime">
            <Realtime />
          </Route>
          <Route path="/change">
            <Change />
          </Route>
          <Route path="/config">
            <Config />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
