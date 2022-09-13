import { Favorite, StarRounded, AddRounded } from "@mui/icons-material";
import { useState } from "react";
import userService from '../utils/user.js'
import "../styles/Menu.css";
const Menu = ({ id, imgSrc, name, ratings, price, cart, setCart }) => {
    const [isFavourite, setFavourite] = useState(false);
    const [currentRating, setCurrentRating] = useState(Math.floor(ratings));

    const handleClick = (value) => {
        setCurrentRating(value);
    };

    const addCart = async () => {
        const index = cart.findIndex((item) => item.id === id);
        const qty = 1
        if (cart[index]) return;
        const newCart = cart.concat({
            id: id,
            name: name,
            imgSrc: imgSrc,
            qty: qty,
            price: price,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        });
        userService.addToCart({id, qty})
        setCart(newCart);

    };

    return (
        <>
            <div className="menuCard">
                <div
                    className={`isFavourite ${isFavourite ? "active" : ""}`}
                    onClick={() => setFavourite(!isFavourite)}
                >
                    <Favorite />
                </div>

                <div className="imageBox">
                    <img alt="item" src={imgSrc} className="itemImage" />
                </div>

                <div className="itemContent">
                    <h3>{name}</h3>
                    <div className="bottom">
                        <div className="ratings">
                            {Array.apply(null, { length: 5 }).map((e, i) => (
                                <i
                                    key={i}
                                    className={`rating ${
                                        currentRating > i ? "orange" : "gray"
                                    }`}
                                    onClick={() => handleClick(i + 1)}
                                >
                                    <StarRounded />
                                </i>
                            ))}

                            <h3 className="price">
                                <span>Rs. </span>
                                {price}
                            </h3>
                        </div>
                        <i className="addtocart" onClick={addCart}>
                            <AddRounded />
                        </i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
