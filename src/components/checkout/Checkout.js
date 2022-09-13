import Product from "./Product";
import Address from "./Address";
import Payment from './Payment';

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, setMenu, setCart, total }) => {
    const [state, setState] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if(state == 0)
            navigate('/')
    }, [state])

    switch (state) {
        case 1:
        	return <Address cart={cart} setMenu={setMenu} state={state} setState={setState} />	;
        case 2:
            return <Product cart={cart} setCart={setCart} state={state} setState={setState} total={total}/>
        case 3:
        	return <Payment state={state} setState={setState}/>;
        default:
    }
};

export default Checkout;
