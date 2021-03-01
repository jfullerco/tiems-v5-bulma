import React, {useState, useEffect} from 'react'
import getSite from '../../Services/siteService'

const AssetList = ({id}) => {
  console.log(id)
  const [siteAssets, setSiteAssets] = useState([])

  useEffect(() => {
    getAssets(id)
  }, [])

  const getAssets = async (id) => {
    const {data: {site_assets}} = await getSite(id)
    setSiteAssets(site_assets)
    console.log(site_assets)
  }

  return (
    <table className="u-full-width">
      <thead>
        <tr>
          <th>
          Service ID
          </th>
          <th>
          Vendor
          </th>
          <th>
          Type
          </th>
          <th>
          Status
          </th>
        </tr>
        </thead>
        <tbody>
        
        {siteAssets ? siteAssets.map(asset => (
          <tr key={asset._id}>
            <td>{asset.assetID}</td>
            <td>{asset.assetVendor}</td>
            <td>{asset.assetType}</td>
            <td>{asset.assetStatus}</td>
          </tr>
        )) : (
          "Assets loading"
        )}
        
        </tbody>
      
    </table>
  )
}
export default AssetList