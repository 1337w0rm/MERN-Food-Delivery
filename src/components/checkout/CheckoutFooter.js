const CheckoutFooter = ({state, setState, text}) => {
	
	const handleProgress = () => {
		setState(state += 1)
	}

	return (
		<div className="placeOrder">
			<h4 onClick={handleProgress}>{text}</h4>
		</div>
	)
}

export default CheckoutFooter