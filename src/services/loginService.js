import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_BASE_URL}/login`

const loginUser = async credentials => {
  try {
    const {data} = await axios.post(baseUrl, credentials)
    return data
  } catch (error) {
    return error.response.data
  }
}

export default { loginUser }
