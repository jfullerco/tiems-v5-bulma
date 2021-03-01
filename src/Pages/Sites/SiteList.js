import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
    
  return (
    <>
    <div className="row">
      <h5>Site List</h5>
    </div>
    
    <div className="row">
    <div className="four columns">
    
    {sites != !sites ? sites.map(site => (
       <span key={site._id}>
        <Link to={`/sites/${site._id}`}>
        <div className="button">{site.site_name}</div>
        </Link>
       </span>
      )
    ) : (
      <div className="button">
          <span className="error">No sites found</span>
      </div>
    )}
    
    </div>
    </div>
    </>
  )
}
export default SiteList