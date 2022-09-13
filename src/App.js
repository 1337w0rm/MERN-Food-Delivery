import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Checkout from "./components/checkout/Checkout";
import Favourite from './components/Favourite'
import Profile from './components/Profile'
import Orders from './components/Orders'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { useState, useEffect } from "react";
import menuService from "./utils/menu";
import userService from "./utils/user";

import "./App.css";

const App = () => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [menu, setMenu] = useState([]);
    const [total, setTotal] = useState(0);

    const gCart = async () => {
        const carts = await userService.getCart()

        const newCart = carts.map(cart => {
            const item = cart.item
            const nCart = {
                id: item.id,
                name: item.name,
                imgSrc: item.imgSrc,
                qty: cart.qty,
                price: item.price,
            }
            return nCart
        })
        setCart(newCart)
    }


    useEffect(() => {
        const loggedInUser = window.localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            setUser(user);
            userService.setToken(user.token);
        }
    }, []);

    useEffect(() => {
        menuService.getAll().then((res) => {
            setMenu(res);
        });
        gCart();
    }, [user]);

    useEffect(() => {
        let temp = 0;
        cart.map((item) => (temp += item.qty * item.price));
        setTotal(temp);
    }, [cart])


    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        !user ? (
                            <Login setUser={setUser} />
                        ) : (
                            <Navigate replace to="/" />
                        )
                    }
                ></Route>
                <Route
                    path="/signup"
                    element={!user ? <Signup /> : <Navigate replace to="/" />}
                ></Route>
                <Route
                    path="/"
                    element={
                        user ? (
                            <Home
                                user={user}
                                setUser={setUser}
                                menu={menu}
                                setMenu={setMenu}
                                cart={cart}
                                setCart={setCart}
                                total={total}
                                setTotal={setTotal}
                            />
                        ) : (
                            <Navigate replace to="/login" />
                        )
                    }
                ></Route>
                <Route
                    path="/checkout"
                    element={<Checkout cart={cart} setCart={setCart} total={total}/>}
                ></Route>
                <Route
                    path="/favourite"
                    element={<Favourite />}
                ></Route>
                <Route
                    path="/profile"
                    element={<Profile />}
                ></Route>
                <Route
                    path="/orders"
                    element={<Orders />}
                ></Route>
            </Routes>
        </Router>
    );
};

export default App;
