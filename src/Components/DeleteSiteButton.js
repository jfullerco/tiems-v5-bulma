import React from 'react'
import {Redirect} from 'react-router-dom'
import siteService from '../Services/siteService'

const DeleteSiteButton = (id) => {

  const deleteEntry = (id) => {
    console.log(id)
    siteService.delSite(id)
  }

  return (
    <div className="button is-rounded is-small" onClick={deleteEntry}>Delete Site</div>
    )
  
}
export default DeleteSiteButton