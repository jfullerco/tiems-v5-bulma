import React, {useState, createContext, useReducer} from 'react'
import stateReducer from './stateReducer'
import serviceReducer from './Services/serviceReducer'

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
      clients: {},
      inFocusClient: "",
      sites: {},
      inFocusSite: "",
      assets: {},
      inFocusAsset: "",
      tickets: {},
      inFocusTicket: ""

    }
    const [userSession, dispatch] = useReducer(stateReducer, initialState)

      const setUser = (id) => {
        dispatch({
          type: "SET_USER",
          payload: id
        })
      }

    const initialSWState = {}
    const [serviceWorker, dispatchSW] = useReducer(serviceReducer, initialSWState)

    const getUser = (user) => {
      dispatch({
        type: "GET_USER",
        payload: user
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
          userSession,
          getUser,
          serviceWorker
      }}>
        {props.children}
      </Provider>
    )
  
}

