import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/menu'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const search = async (query) => {
	const res = await axios.get(`${baseUrl}/search/?query=${query}`)
	return res.data
}

export default { getAll, search }