import axios from 'axios'

const ax = axios.create({
  baseURL: 'http://localhost:3000/',
})

export default {
  async getBikes() {
    // debugger
    let response = await ax.get('bikes_response.json')

    return response
  },
}
