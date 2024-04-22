import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/v1/users'

const allUsers = async () => {
  const { data } = await axios.get(baseUrl)

  return data
}

const signUpUser = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default { signUpUser, allUsers }
