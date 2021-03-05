import React, {useContext} from 'react'
import {stateContext} from '../stateContext'
import getClient from './clientService'

const refreshSite = (clientID) => {
  const userContext = useContext(stateContext)
  const getSessionData = async (clientID) => {
    const {data} = await getClient(clientID)
      userContext.setSessionData({
        client_name: data.client_name,
        sites: data.sites,
        _id: data._id
      })
    }
    return {getSessionData}
  }
  export default refreshSite