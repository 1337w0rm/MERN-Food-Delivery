import CheckoutHeader from './CheckoutHeader'
import CheckoutFooter from './CheckoutFooter'
import Progress from './Progress';

const Address = ({ cart, setMenu, state, setState }) => {
    return (
        <div>
            <CheckoutHeader state={state} setState={setState} name="Address" />
            <Progress active="1"/>
            <main className="signup-container">
                <form className="signup-form">
                    <label className="inp">
                        <input
                            type="text"
                            className="input-text"
                            placeholder=" "
                            name="name"
                            required
                        />
                        <span className="label">Name</span>
                        <span className="input-icon">
                            <i className="fa-solid fa-envelope" />
                        </span>
                    </label>
                    <label className="inp">
                        <input
                            type="text"
                            className="input-text"
                            placeholder=" "
                            id="room"
                            name="Room No."
                            required
                        />
                        <span className="label">Room No.</span>
                        <span
                            className="input-icon input-icon-password"
                            data-password
                        >
                            <i className="fa-solid fa-eye" />
                        </span>
                    </label>
                    <label className="inp">
                        <input
                            type="text"
                            className="input-text"
                            placeholder=" "
                            id="hostel"
                            name="Hostel/PG Name"
                        />
                        <span className="label">Hostel/PG</span>
                        <span
                            className="input-icon input-icon-password"
                            data-password
                        >
                            <i className="fa-solid fa-eye" />
                        </span>
                    </label>
                    <label className="inp">
                        <input
                            type="text"
                            className="input-text"
                            placeholder=" "
                            id="phone"
                            name="Phone"
                        />
                        <span className="label">Phone</span>
                        <span
                            className="input-icon input-icon-password"
                            data-password
                        >
                            <i className="fa-solid fa-eye" />
                        </span>
                    </label>
                </form>
            </main>
            <CheckoutFooter state={state} setState={setState} text="Next" />
        </div>
    );
};
export default Address;
