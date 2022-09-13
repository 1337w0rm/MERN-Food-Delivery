import { AddRounded, RemoveRounded } from "@mui/icons-material";
import userService from '../utils/user'

import "../styles/CartItem.css";

const CartItem = ({ index, cart, setCart }) => {
    const itemIndex = cart.findIndex((item) => item.id === index);
    const { imgSrc, name, price, qty } = cart[itemIndex];

    const addQty = async () => {
        const newArr = [...cart];
        newArr[itemIndex].qty += 1;
        await userService.updateQty(newArr[itemIndex].id, 'inc')
        setCart(newArr);
    };

    const removeQty = async () => {
        const newArr = [...cart];
        newArr[itemIndex].qty -= 1;

        if (newArr[itemIndex].qty < 1) {
            userService.deleteCartItem(newArr[itemIndex].id)
            newArr.splice(itemIndex, 1);
            setCart(newArr);
        } else {
            setCart(newArr)
            await userService.updateQty(newArr[itemIndex].id, 'dec')
        };
    };
    return (
        <div className="cartItem">
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <div className="itemSection">
                <h2 className="itemName">{name}</h2>
                <div className="itemQuantity">
                    <span>x {qty}</span>
                    <div className="quantity">
                        <RemoveRounded
                            className="itemRemove"
                            onClick={removeQty}
                        />
                        <AddRounded className="itemAdd" onClick={addQty} />
                    </div>
                </div>
            </div>
            <p className="itemPrice">
                <span className="dolorSign">Rs.</span>{" "}
                <span className="itemPriceValue">
                    {price * cart[itemIndex].qty}
                </span>
            </p>
        </div>
    );
};

export default CartItem;
