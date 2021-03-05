import React, {useContext} from 'react'
import {stateContext} from '../stateContext'
import getClient from './clientService'


  
  const getSessionData = async (clientID) => {
    const userContext = useContext(stateContext)
    const {data} = await getClient(clientID)
      userContext.setSessionData({
        client_name: data.client_name,
        sites: data.sites,
        _id: data._id
      })
    }
  
  export default getSessionData