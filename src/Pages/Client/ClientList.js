import React, {useState, useEffect, useContext} from 'react'
import {Link, Switch, useHistory} from 'react-router-dom'
import getClient from '../../Services/clientService'

import {stateContext} from '../../stateContext'

const ClientList = () => {
  
  const userContext = useContext(stateContext)
  const {userData: {clients}} = userContext
  const history = useHistory()
  const [clientID, setClientID] = useState(localStorage.clientID)
  
  useEffect(() => {
    getSession(clientID)
  }, [])  
  
  const getSession = async () => {
    const {data} = await getClient(clientID)
    userContext.setSessionData({
      client_name: data.client_name,
      sites: data.sites,
      _id: data._id
    })
  }

  const handleChange = (e) => {
    setClientID(e.target.value)
  }
  
  useEffect(() => {
      getSession(clientID)
  }, [handleChange])

  const handleSubmit = () => {
    history.push("/sites")
  }

  return (
    <div className="field has-addons has-addons-centered">
    <div className="control is-expanded">
      <div className="select is-rounded is-fullwidth" onChange={handleChange}>
      <select>
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
      <div className="control">
      <button className="button is-rounded is-info" onClick={handleSubmit}>choose</button>
      </div>
    
    </div>
  )
}
export default ClientList
