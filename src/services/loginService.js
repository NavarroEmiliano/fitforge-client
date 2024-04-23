import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_BASE_URL}/login`

const loginUser = async credentials => {
    const {data} = await axios.post(baseUrl, credentials)
    return data
}

export default { loginUser }
