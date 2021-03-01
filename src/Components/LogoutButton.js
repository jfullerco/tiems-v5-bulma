import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

const LogoutButton = () => {
  const userContext = React.useContext(stateContext)
  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand"></div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">TIEMS</div>
      </div>

    <div className="navbar-end">  
        <a className="navbar-item">
          <Link to="/">Dashboard</Link></a>
    </div>
        <a className="navbar-item">
          <Link>Logout </Link></a>
      </div>
    </div>
    
  )
}
export default LogoutButton