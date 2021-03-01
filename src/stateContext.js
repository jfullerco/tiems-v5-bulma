import React, {useState, createContext} from 'react'

export const stateContext = createContext({})

export const StateProvider = (props) => {
    const {Provider} = stateContext
    const [clientLoggedIn, setClientLoggedIn] = useState(
      false)
    const [sessionData, setSessionData] = useState({
      client_name: "",
      sites: [],
      _id: ""
    }) 
    
    return (
      <Provider value={{
          clientLoggedIn, 
          setClientLoggedIn,
          sessionData, 
          setSessionData
      }}>
        {props.children}
      </Provider>
    )
  
}

