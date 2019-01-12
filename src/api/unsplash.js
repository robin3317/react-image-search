import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ea21e1cdf81fa9694ee333babe5f1c2f6ff608e4f41b791f9fb775bd8c6420fb'
  }
})