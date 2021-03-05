import React from 'react'
import {useHistory} from 'react-router-dom'
import siteService from '../Services/siteService'
import refreshSite from '../Services/refreshSite'

const DeleteSiteButton = ({id}) => {
  const history = useHistory()
  const clientID = localStorage.clientID
  const deleteEntry = () => {
    console.log(localStorage.clientID)
    siteService.delSite(id)
    refreshSite.getSessionData(clientID)
    history.push("/sites")
  }

  return (
    <div className="button is-rounded is-small" onClick={deleteEntry}>Delete Site</div>
    )
  
}
export default DeleteSiteButton