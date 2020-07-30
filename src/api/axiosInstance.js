import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://project-3-cms-server.herokuapp.com/'
})

export default instance
