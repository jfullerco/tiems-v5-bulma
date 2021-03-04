import React, {useState, useEffect, useContext} from 'react'
import {Link, Switch} from 'react-router-dom'

import {stateContext} from '../../stateContext'

const ClientList = () => {
  
  const userContext = useContext(stateContext)

  const {userData: {clients}} = userContext

  const handleChange = (e) => {
    const id = e.target.value
    localStorage.setItem('clientID', id)
    localStorage.setItem('clientChanged', id)
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
