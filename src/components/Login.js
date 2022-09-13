import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import loginService from "../utils/login.js";
import userService from "../utils/user";


import "../styles/Signup.css";
const Login = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await loginService.login({ username, password });

            window.localStorage.setItem(
                'loggedInUser', JSON.stringify(user)
            )

            setUser(user);
            userService.setToken(user.token)
            setUsername("");
            setPassword("");
            navigate('/')
        } catch (exception) {
            console.log("Wrong Credentials", exception);
        }
    };

    return (
        <div className="cuntainer">
            <main className="signup-container">
                <h1 className="heading-primary">
                    Log in<span className="span-blue">.</span>
                </h1>
                <form onSubmit={handleSubmit} className="signup-form">
                    <label className="inp">
                        <input
                            type="text"
                            className="input-text"
                            placeholder=" "
                            name="username"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        />
                        <span className="label">Username</span>
                        <span className="input-icon">
                            <i className="fa-solid fa-envelope" />
                        </span>
                    </label>
                    <label className="inp">
                        <input
                            type="password"
                            className="input-text"
                            placeholder=" "
                            id="password"
                            name="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <span className="label">Password</span>
                        <span
                            className="input-icon input-icon-password"
                            data-password
                        >
                            <i className="fa-solid fa-eye" />
                        </span>
                    </label>
                    <button type="submit" className="btn btn-login">
                        Login
                    </button>
                </form>
                <p className="text-mute">
                    Not a member? <a href="/signup">Sign up</a>
                </p>
            </main>
            <div className="welcome-container">
                <h1 className="heading-secondary">
                    Welcome to <span className="lg">Sasta Zomato!</span>
                </h1>
                <img
                    src="https://png2.cleanpng.com/sh/82506800d9e08bf14cb0a38d53322fea/L0KzQYm3VsI1N6Rug5H0aYP2gLBuTfxieKV0iJ9taYPzfLLCTfRmfppofZ92dXz3eb7shPliNZ1miOZ4cD3wf7TylgAuPZM3fqNsMEC4RIKAUsQvOmU5SaUBMkm0RYOCWME1OGI7S6Y9NT7zfri=/kisspng-laptop-display-device-multimedia-laptop-mockup-5b2f1c00541724.2441362915298140163445.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Login;
