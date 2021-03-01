import React, {useState} from 'react'
import http from './http-common'

const getClient = async (clientID) => {
  
 return await http.get(`/rest/clients/${clientID}?metafields=true&fetchchildren=true`)
  

}
export default getClient