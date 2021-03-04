import React from 'react'
import siteService from '../../Services/siteService'

const DeleteSiteButton = (id) => {

  const deleteEntry = (id) => {
    siteService.delSite(id)
  }
  return (
    <div className="button is-small is-info" onClick={deleteEntry}>Delete Site</div>
    )
  
}
export default DeleteSiteButton