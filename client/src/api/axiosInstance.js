import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-ecommerse-cms.herokuapp.com/'
})

export default instance
