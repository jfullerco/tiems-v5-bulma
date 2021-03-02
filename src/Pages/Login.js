import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import loginService from '../Services/loginService'
import {stateContext} from '../stateContext'


export default function Login() {
  const userContext = useContext(stateContext)
  const history = useHistory()

  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  const [saveMe, setSaveMe] = useState(false)
  
  const [loginErrors, setLoginErrors] = useState("")

  const handleSubmit = async ({user, pass, save}) => {
    
    const {data: [login]} = await loginService(user, pass)
    
    login != null ? (
        login.tiemsUser == user && login.tiemsPass == pass ? 
          (
            userContext.setClientLoggedIn(true),
            localStorage.setItem('clientID', login._parent_id),
            localStorage.setItem('LoggedIn', "true"),
            history.push("/")
             
          ) : (
            setLoginErrors("Incorrect username or password")
          )
          ) : (
            setLoginErrors("Incorrect username or password")
          )
              
  }
  
  const handleInputChange = event => {    
    const {name, value} = event.target
    setLoginAttempt({...loginAttempt, [name]: value})
  }

  const handleSaveMe = event => {
    setSaveMe(!saveMe)
  }

  return(
    <>
      <div className="block"> 
        <section className="hero is-info">
          <div className="hero-body">
            <p className="title">Login</p>
          </div>
        </section>
      </div>

      <div className="columns is-mobile is-centered">    
      <div className="column is-half">
      <div className="block">    
        <div className="field">
          <div className="control">
              <input
                type="text"
                placeholder="user"
                name="user"
                value={loginAttempt.user}
                onChange={handleInputChange}
                className="input is-rounded"
              />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              type="password"
              placeholder="pass"
              name="pass"
              value={loginAttempt.pass}
              onChange={handleInputChange}
              className="input is-rounded"
            />
          </div>
        </div>
        <div className="field is-grouped is-hidden">
          <input
            type="checkbox"
            name="save"
            onChange={handleSaveMe}
            className="checkbox"
          />  
          <label className="label is-small">Remember me </label>
        </div>
        <div className="control">
          <button
            className="button is-info is-rounded is-fullwidth"
            type="submit"
            onClick={()=>handleSubmit(loginAttempt)}
          >Login</button>
        </div>
      </div>
      </div>  
      </div>
    </>
  )

}