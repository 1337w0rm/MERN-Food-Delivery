import {
    ArrowBackRounded,
} from "@mui/icons-material/";

import { useNavigate } from 'react-router-dom';

const Profile = ({ cart, setMenu}) => {

	const navigate = useNavigate()

	return (
		<div>
			<header className="orderHeader">
    			<ArrowBackRounded onClick={() => navigate('/')} className="backIcon"/>
    			<h4>Profile</h4>
    		</header>

    		<div className="profileInfo">
    			<div className="imgBox">
                	<img src="https://avatars.githubusercontent.com/u/41179329" alt="" />
            	</div>
            	<div>
            		<p>Username: aditya</p>
            		<p>Name: Aditya Kumar Singh</p>
            		<p>Email: aditya@gmail.com</p>
            		<p>Phone: 7002934835</p>
            	</div>
    		</div>
		</div>
	)
}

export default Profile