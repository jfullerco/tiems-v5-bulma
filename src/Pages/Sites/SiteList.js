import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
    
  return (
    <>
    <div className="block">
      <h5>Site List</h5>
    </div>
    
    <div className="block">
    
    {sites != !sites ? sites.map(site => (
       <span key={site._id}>
        <Link to={`/sites/${site._id}`}>
        <div className="button is-rounded">{site.site_name}</div>
        </Link>
       </span>
      )
    ) : (
      <span>
      <div className="button is-rounded is-danger">
          No sites found
      </div>
      </span>
    )}
    
    </div>
    </>
  )
}
export default SiteList