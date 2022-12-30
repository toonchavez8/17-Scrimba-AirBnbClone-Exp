import React from "react";
import AirBnbLogo from "../assets/airbnb-logo.png"
import "../css/NavBar.css";

export default function Navbar() {
	return (
		<header>
			<nav>
				<img src={AirBnbLogo} alt="airbnb logo" className="nav--logo"/>
			</nav>
		</header>
	);
}
