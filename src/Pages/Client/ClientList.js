import React, {useState, useEffect, useContext} from 'react'
import {Link, Switch} from 'react-router-dom'
import getClient from '../../Services/clientService'

import {stateContext} from '../../stateContext'

const ClientList = () => {
  
  const userContext = useContext(stateContext)
  const {userData: {clients}} = userContext
  
  const [clientID, setClientID] = useState(clients)
  
  console.log(name)
  const getSession = async (clientID) => {
    
    const {data} = await getClient(clientID)
    userContext.setSessionData({
      client_name: data.client_name,
      sites: data.sites,
      _id: data._id
    })
  }
  const handleChange = (e) => {
    setClientID(e.target.value)
    getSession(clientID)
  }

  return (
    <div className="control">
    <div className="select is-rounded is-fullwidth">
      <select onChange={handleChange}>
        {clients != undefined ? clients.map(client => (
          <option value={client._id} key={client._id}>
            {client.client_name}
          </option>
        )) : (
          "No Clients Assigned"
        )}
      </select>
    </div>
    </div>
  )
}
export default ClientList
