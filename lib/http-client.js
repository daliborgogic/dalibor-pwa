'use-strict'
import axios from 'axios'
axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:5000'

export default function client () {
  return axios.create()
}
