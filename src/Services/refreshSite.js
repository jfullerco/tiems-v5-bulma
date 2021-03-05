import React from 'react'
import getClient from './clientService'

const refreshSite = async (clientID) => {
    const {data} = await getClient(clientID)
    userContext.setSessionData({
      client_name: data.client_name,
      sites: data.sites,
      _id: data._id
    })
  }

  export default refreshSite