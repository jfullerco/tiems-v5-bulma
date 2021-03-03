import React, { useState, useEffect, useContext } from 'react'

const EditSiteModal = ({siteDetails}) => {
  const [editSite, setEditSite] = useState({
    site_name: "",
    site_add1: "",
    site_add2: "",
    site_city: "",
    site_state: "",
    site_zip: "", 
    _parent_id: ""
  })
  console.log(siteDetails)
  return (
    <div className="modal">
    <div className="modal-background"></div>
      <div className="modal-content">
      {siteDetails.site_name}
      </div>
    <button className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}
export default EditSiteModal