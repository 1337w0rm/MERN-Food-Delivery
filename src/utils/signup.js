import axios from 'axios'
const baseUrl = 'https://khanakhazanaapi.onrender.com/api/signup'

const signup = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { signup }
