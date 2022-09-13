import {
    ArrowBackRounded,
} from "@mui/icons-material/";

const CheckoutHeader = ({state, setState, name}) => {
	return (
		<header className="orderHeader">
    			<ArrowBackRounded onClick={() => setState(state -= 1)}className="backIcon"/>
    			<h4>{name}</h4>
    	</header>
	)
}

export default CheckoutHeader