import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-server-app.herokuapp.com/'
})

export default instance
