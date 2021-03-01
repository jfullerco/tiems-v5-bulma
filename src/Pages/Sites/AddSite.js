import React, {useState} from 'react'
import postSite from '../../services/siteServices'

const AddSite = () => {
  const initialSiteState = {
    id: null,
    site_name: "",
    submitted: false
  }

  const [site, setSite] = useState(initialSiteState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target
    setClient({...client, [name]: value})
  }

  const saveSite = async () => {
    var data = {site}
  

  const {data} = await postSite(data)
    
      setSubmitted(true)
      console.log(data)
    
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