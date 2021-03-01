import React, {useState, useEffect, useContext} from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import {StateProvider, stateContext} from './stateContext'

import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import SiteList from './Pages/Sites/SiteList'
import SiteDetail from './Pages/Sites/SiteDetail'

import LogoutButton from './Components/LogoutButton'

import "./style.css"

export default function App() {
  
  const user = useContext(stateContext)
  
  return (
    <StateProvider>
      <Router>
      <div className="container is-fluid"> 
      <div className="column is-three-fifths is-offset-one-fifth">
        <LogoutButton />
        
          <Switch>
            
            <Route exact path="/"  component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route exact path="/sites" component={SiteList} />
            <Route path="/sites/:id" component={SiteDetail} />

          </Switch>
        </div>  

      </div>
    </Router>
    </StateProvider>
  );
}
