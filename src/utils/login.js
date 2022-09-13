import axios from 'axios'
const baseUrl = 'http://khanakhazanaapi.onrender.com/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
