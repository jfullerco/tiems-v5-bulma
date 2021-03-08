import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

const LogoutButton = () => {

  const userContext = React.useContext(stateContext)
  const [isActive, setIsActive] = useState(false)
  const logOut = () => {
    userContext.setLoggedIn(false)
  }

  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">

      <div className="navbar-item">MIEMS</div>
    
    <a
          onClick={() => {
            setIsActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='tiemsNavbar'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div 
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        aria-label='menu' 
        id='tiemsNavbar'
      >

      <div className="navbar-end">

        <Link to="/" className="navbar-item">Dashboard</Link>

        {userContext.loggedIn === true ? (<Link to="/" onClick={logOut} className="navbar-item">
          Logout
        </Link>)
        :
        (<Link to="/login" className="navbar-item" >Login</Link>)}

      </div>
    </div>
    
    </div>
    
  )
}
export default LogoutButton