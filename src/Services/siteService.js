import React, {useState} from 'react'
import http from './http-common'

const getSite = async (id) => {

  return await http.get(`/rest/sites/${id}?metafields=true&fetchchildren=true`)

}
export default getSite