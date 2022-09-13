import Header from "./Header";
import Menu from "./Menu";
import CartItem from "./CartItem";
import "../styles/Home.css";

import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Home = ({ user, setUser, menu, setMenu, cart, setCart, total, setTotal }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const toggleMenu = document.querySelector(".cart");
        toggleMenu.addEventListener("click", () => {
            document.querySelector(".rightMenu").classList.toggle("active");
        });

        const toggleProfile = document.querySelector(".profile");
        toggleProfile.addEventListener("click", () => {
            document.querySelector(".profileMenu").classList.toggle("active");
        });
    }, []);

    const signOut = () => {
        window.localStorage.removeItem('loggedInUser')
        setUser(null)
        navigate('/login')
    }

    return (
        <div className="container">
            <Header cart={cart} setMenu={setMenu} />
            <div className="menuContainer">
                {
                    menu.map(item => <Menu
                                        key={item.id}
                                        user={user}
                                        id={item.id}
                                        imgSrc={item.imgSrc}
                                        name={item.name}
                                        ratings={3}
                                        price={item.price}
                                        cart={cart}
                                        setCart={setCart}
                                    />)
                }
            </div>
            <div className="rightMenu">
                <div className="cartCheckOutContainer">
                    <h2 className="cartHeading">Cart Items</h2>
                    <div className="cartContainer">
                        <div className="cartItems">
                            {cart.map((item) => (
                                <CartItem
                                    key={item.id}
                                    index={item.id}
                                    cart={cart}
                                    setCart={setCart}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="total">
                    <h3>Total</h3>
                    <p>
                        <span>Rs. </span>
                        {total}
                    </p>
                </div>
                <button className="checkout" onClick={() => navigate('/checkout')}> Check Out </button>
            </div>
            <div className="profileMenu">
                <a href="/profile">Profile</a>
                <a href="/favourite">Favourites</a>
                <a href="/orders">Orders</a>
                <button onClick={signOut}>Log Out</button>
            </div>
        </div>
    );
};

export default Home;
