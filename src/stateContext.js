import React, {useState, createContext, useReducer} from 'react'
import stateReducer from './stateReducer'


export const stateContext = createContext({})

export const StateProvider = (props) => {
    
    const {Provider} = stateContext
    
    const [clientLoggedIn, setClientLoggedIn] = useState(false)
    
    const [userData, setUserData] = useState({
      
    })

    const [sessionData, setSessionData] = useState({
      client_name: "",
      sites: [],
      _id: ""
    }) 

    const initialState = {
      userID: "",
      loggedIn: false,
      clients: {},
      inFocusClient: "",
      sites: {},
      inFocusSite: "",
      assets: {},
      inFocusAsset: "",
      tickets: {},
      inFocusTicket: "",
      dataLoading: false

    }
    const [userSession, dispatch] = useReducer(stateReducer, initialState)

      const setUser = (id) => {
        dispatch({
          type: "SET_USER",
          payload: id
        })
      }

      const setLoggedIn = () => {
        dispatch({
          type: "LOGGED_IN",
          payload: true
        })
      }

      const setClients = (id) => {
        dispatch({
          type: "SET_CLIENTS",
          payload: id
        })
      }

    
    return (
      <Provider value={{
          clientLoggedIn, 
          setClientLoggedIn,
          sessionData, 
          setSessionData,
          userData,
          setUserData,
          setUser,
          setLoggedIn,
          userSession
      }}>
        {props.children}
      </Provider>
    )
  
}

