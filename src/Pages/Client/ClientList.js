import React, {useState, useEffect, useContext} from 'react'
import {Link, Switch} from 'react-router-dom'

import stateContext from '../../stateContext'

const ClientList = () => {
  
  const userContext = useContext(stateContext)

  const {userData: {clients}} = userContext

  console.log(clients)

  return (
    <div>
    {clients != !clients ? clients.map(client => (
      <div className="button" key={client._id}>{client.client_name}</div>
    ))}
    </div>
  )
}
