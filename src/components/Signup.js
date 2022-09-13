import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signupService from '../utils/signup.js'
import "../styles/Signup.css";
const Signup = () => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await signupService.signup({firstname, lastname, username, email, phone, password})
            navigate('/login')
        } catch (exception) {
            console.log('Error')
        }
    }

    return (
        <div className="cuntainer">
            <main className="signup-container">
                <h1 className="heading-primary">
                    Create new account<span className="custom-dot">.</span>
                </h1>
                <p className="text-mute">
                    Already A Member? <a href="/login">Log in</a>
                </p>

                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="f-row input-wrapper">
                        <label className="inp">
                            <input
                                type="text"
                                className="input-text"
                                placeholder=" "
                                value={firstname}
                                name="First Name"
                                onChange={({ target }) => setFirstName(target.value)}
                            />
                            <span className="label">First name</span>
                            <span className="input-icon">
                                <i className="fa-solid fa-address-card" />
                            </span>
                        </label>
                        <label className="inp">
                            <input
                                type="text"
                                className="input-text"
                                placeholder=" "
                                value={lastname}
                                name="Last Name"
                                onChange={({ target }) => setLastName(target.value)}  
                            />
                            <span className="label">Last name</span>
                            <span className="input-icon">
                                <i className="fa-solid fa-address-card" />
                            </span>
                        </label>
                    </div>
                    <label className="inp">
                        <input
                            type="text"
                            className="input-text"
                            placeholder=" "
                            value={username}
                            name="Username"
                            onChange={({ target }) => setUsername(target.value)}
                        />
                        <span className="label">Username</span>
                        <span className="input-icon">
                            <i className="fa-solid fa-envelope" />
                        </span>
                    </label>
                    <label className="inp">
                        <input
                            type="email"
                            className="input-text"
                            placeholder=" "
                            value={email}
                            name="Email"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <span className="label">Email</span>
                        <span className="input-icon">
                            <i className="fa-solid fa-envelope" />
                        </span>
                    </label>
                    <label className="inp">
                        <input
                            type="text"
                            className="input-text"
                            placeholder=" "
                            value={phone}
                            name="Phone"
                            onChange={({ target }) => setPhone(target.value)}
                        />
                        <span className="label">Phone</span>
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
                            value={password}
                            name="Password"
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
                    <button className="btn btn-signup">Create account</button>
                </form>
            </main>
            <div className="welcome-container">
                <h1 className="heading-secondary">
                    Welcome to <span className="lg">Planner Buddy!</span>
                </h1>
                <img
                    src="https://png2.cleanpng.com/sh/82506800d9e08bf14cb0a38d53322fea/L0KzQYm3VsI1N6Rug5H0aYP2gLBuTfxieKV0iJ9taYPzfLLCTfRmfppofZ92dXz3eb7shPliNZ1miOZ4cD3wf7TylgAuPZM3fqNsMEC4RIKAUsQvOmU5SaUBMkm0RYOCWME1OGI7S6Y9NT7zfri=/kisspng-laptop-display-device-multimedia-laptop-mockup-5b2f1c00541724.2441362915298140163445.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Signup;
