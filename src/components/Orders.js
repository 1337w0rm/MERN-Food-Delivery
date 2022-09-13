import {
    ArrowBackRounded,
} from "@mui/icons-material/";

import { useNavigate } from 'react-router-dom';

const Orders = ({ cart, setMenu}) => {

	const navigate = useNavigate()

	return (
		<div>
			<header className="orderHeader">
    			<ArrowBackRounded onClick={() => navigate('/')} className="backIcon"/>
    			<h4>Orders</h4>
    		</header>		
		</div>
	)
}

export default Orders