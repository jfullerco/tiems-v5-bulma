import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

import getClient from '../Services/clientService'
import LogoutButton from '../Components/LogoutButton'

import Login from './Login'

const Dashboard = () => {
  
  const userContext = useContext(stateContext)
  const clientID = localStorage.clientID
  
  useEffect(() => {
     
     getSession(clientID)
     
  }, [])

  const getSession = async (clientID) => {
    
    const {data} = await getClient(clientID)
    userContext.setSessionData({
      client_name: data.client_name,
      sites: data.sites,
      _id: data._id
    })
    
  }
console.log(userContext.sessionData)
  return (  
    <>  
      {(localStorage.LoggedIn === "true") ? (  
      <> 
        <div className="block">
          <h5>Dashboard</h5>
        </div>
        
        <div className="block">
        <p />
          <Switch>
            <span>
              <Link to="/sites">
                <div className="button is-rounded">
                  Sites
                </div>
              </Link>
            </span>
          </Switch>
        </div>
      </>

      ) : (
        
        <Redirect to="/login" />
        
      )}
  </>
  )
}

export default Dashboard