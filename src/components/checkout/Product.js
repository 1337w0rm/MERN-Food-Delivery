import CartItem from '../CartItem'
import CheckoutHeader from './CheckoutHeader'
import CheckoutFooter from './CheckoutFooter'
import Progress from './Progress';

import '../../styles/Product.css'

const Product = ({cart, setCart, state, setState, total}) => {
    return (
    	<div className="orderSummary">
    		<CheckoutHeader state={state} setState={setState} name="Order Summary"/>
    		<Progress active="2"/>
    		<div className="orderItems">
    			{cart.map((item) => (
                    <CartItem
                        key={item.id}
                        index={item.id}
                        cart={cart}
                        setCart={setCart}
                    />
                ))}
			</div>
            <div className="priceDetails">
            	<h4>Price Details</h4>
            	<div className="details">
	            	<div className="name">
	            		<p>Price ( {cart.length} items)</p>
	            		<p>Delivery</p>
	            		<hr />
	            		<h4>Total</h4>
	            	</div>
	            	<hr />
	            	<div className="price">
	            		<p>Rs. {total}</p>
	            		<p>Free</p>
	            		<hr />
	            		<h4>Rs. {total}</h4>
	            	</div>
	            </div>
            </div>
    		<CheckoutFooter state={state} setState={setState} text="Continue"/>
    	</div>
    );
};

export default Product;
