import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

const LogoutButton = () => {
  const userContext = React.useContext(stateContext)

  const logOut = () => {
    localStorage.removeItem('LoggedIn')
  }

  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand"></div>
    <div className="navbar-menu">
      
      <div className="navbar-start">
        <div className="navbar-item">TIEMS</div>
      </div>

      <div className="navbar-end">  
            <Link to="/" className="navbar-item">Dashboard</Link>
            <Link to="/" onClick={logOut} className="navbar-item">Logout</Link>
      </div>

    </div>
    </div>
    
  )
}
export default LogoutButton