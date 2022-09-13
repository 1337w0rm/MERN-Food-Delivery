import "../../styles/Progress.css"
import { useEffect } from 'react';

const Progress = ({ active }) => {

	useEffect(() => {
		document.getElementById(active).classList.add("is-active") 
	}, [])

	return (
		<div className="container-fluid">
		  <br />
		  <ul className="list-unstyled multi-steps">
		    <li id="1">Address</li>
		    <li id="2">Order Summary</li>
		    <li id="3">Payments</li>
		  </ul>
		</div>
	)
}

export default Progress;