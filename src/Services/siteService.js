import React, {useState} from 'react'
import http from './http-common'

const getSite = async (id) => {

  return await http.get(`/rest/sites/${id}?metafields=true&fetchchildren=true`)

}

const postSite = async (id, data) => {

  return await http.post(`/rest/sites`, data)

}

const putSite = async (id, data) => {

  return await http.put(`/rest/sites/${id}`, site)

}

const delSite = async (id, data) => {

  return await http.delete(`/rest/sites`, data)

}

export default {getSite, postSite, putSite, delSite}