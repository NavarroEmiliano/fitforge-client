import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/v1/users'

 const signUpUser = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  console.log(credentials)
  console.log(response)
  return response
}

export default {signUpUser}