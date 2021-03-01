import React, {useState} from 'react'
import postSite from '../../Services/siteService'

const AddSite = () => {
  const clientID = localStorage.clientID
  const initialSiteState = {
    id: null,
    site_name: "",
    _parent_id: clientID
  }

  const [site, setSite] = useState(initialSiteState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target
    setClient({...client, [name]: value})
  }

console.log(initialSiteState)
  const saveSite = async () => {
    var data = {site}
  

  const {response} = await postSite(data)
    
      setSubmitted(true)
      console.log(response)
    
  }

const newSite = () => {
  setClient(initialSiteState)
  setSubmitted(false)
}

  return (
    <div className="add-site-form">
      {submitted ? (
        <div>
          <h3>Site Added</h3>
          <button onClick={newClient}>Add Another</button>
        </div>
      ) : (
        <div className="form-group">
          <label htmlFor="client_name">Site Name</label>
          <input
            type="text"
            id="site_name"
            value={site.site_name}
            onChange={handleInputChange}
            name="site_name"
            placeholder="site name"
          />
        <button onClick={saveSite}>Add</button>
        </div>
      )}
  </div>
  )
}

export default AddSite