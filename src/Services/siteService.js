import React, {useState} from 'react'
import http from './http-common'

const getSite = async (id) => {

  return await http.get(`/rest/sites/${id}?metafields=true&fetchchildren=true`)

}

const postSite = async (id, data) => {
  return await http.post(`/rest/clients/${id}/sites`, data)
}

export default getSite