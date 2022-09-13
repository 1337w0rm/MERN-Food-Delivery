import axios from 'axios'
const baseUrl = 'http://khanakhazanaapi.onrender.com/api/user'

let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const getCart = async () => {
	const config = {headers: { Authorization: token }}
	const response = await axios.get(`${baseUrl}/cart`, config)
	return response.data.cart
}

const addToCart = async obj => {
	const config = {headers: { Authorization: token }}
  	const response = await axios.post(baseUrl, obj, config)
  	return response.data
}

const deleteCartItem = async id => {
	const config = {headers: { Authorization: token }}
	const response = await axios.delete(`${baseUrl}/${id}`, config)
	return response.data
}

const updateQty = async (id, type) => {
	const config = {headers: { Authorization: token }}
	const response = await axios.put(`${baseUrl}/${type}/${id}`, {}, config)
	return response.data
} 

export default { getCart, addToCart, setToken, deleteCartItem, updateQty }
