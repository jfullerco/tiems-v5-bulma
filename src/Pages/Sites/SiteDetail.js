import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect, useParams} from 'react-router-dom'

import {stateContext} from '../../stateContext'

import LogoutButton from '../../Components/LogoutButton'
import AssetList from '../Assets/AssetList'

const SiteDetail = () => {
  const {id} = useParams()
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  const siteDetails = sites.find((site) => site._id === id) 
  console.log(siteDetails)
  return (
    <div>
    <h5>Site Details</h5> <p />
    {siteDetails ? (
      <>
      <table className="u-full-width">
      <thead>
      <tr>
        <th>Site Name</th>
        <th>Address</th>
      </tr>
      </thead>
      <tbody>
        <tr>
        <td>{siteDetails.site_name}</td>
        <td>
          {siteDetails.site_add1}
          {siteDetails.site_add2} <br />
          {siteDetails.site_city} {siteDetails.site_state}, {siteDetails.site_zip}
        </td>
        </tr>
      </tbody>
    </table>
    <AssetList id={id} />
    </>
    ) : (
      <div className="button">
        <span className="error">
        Site details not available
        </span>
      </div>
      )
    }
    </div>
  )
}
export default SiteDetail