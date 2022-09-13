import CheckoutHeader from './CheckoutHeader';
import CheckoutFooter from './CheckoutFooter';
import Progress from './Progress'
import axios from 'axios'

const initPayment = (data) => {
	const options ={
		key: "rzp_test_uhE0V3V3dzvlvb",
		amount: data.amount,
		currency: data.currency,
		name: "Khana Khazana",
		description: "Test Transaction",
		order_id: data.id,
		handler: async (response) => {
			try {
				const verifyUrl = "http://localhost:3001/payments/verify"
				const { data } = await axios.post(verifyUrl, response)
				console.log(data)
			} catch(err) {
				console.log(err)
			}
		}
	}

	const rzp1 = new window.Razorpay(options)
	rzp1.open()
}

const handlePayment = async () => {
	try {
		const orderUrl = "http://localhost:3001/payments/order"
		const { data } = await axios.post(orderUrl, {amount : "500"})
		console.log(data)
		initPayment(data.data)
	} catch(err) {
		console.log(err)
	}
}

const Payment = ({ state, setState}) => {
	return (
		<div>
			<CheckoutHeader state={state} setState={setState} name="Payments"/>
			<Progress active="3" />
			<div className="payments-container">
				<div className="cod">Cash On Delivery</div>
				<div className="online">Online</div>
				<button onClick={handlePayment}>Pay Now!</button>
			</div>
			<CheckoutFooter state={state} setState={setState} text="Place Order"/>
		</div>
	)
}

export default Payment;