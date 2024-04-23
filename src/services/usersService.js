import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_BASE_URL}/users`

const getAllUsers = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}

const signUpUser = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default { signUpUser, getAllUsers }
