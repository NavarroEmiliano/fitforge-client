import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/v1/login'

const loginUser = async credentials => {
  try {
    const {data} = await axios.post(baseUrl, credentials)
    return data
  } catch (error) {
    return error.response.data
  }
}

export default { loginUser }
