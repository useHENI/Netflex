import React, { useState, useEffect } from "react";
import Nlogo from "./image/Picsart_23-12-28_16-08-31-881.png";
import logo from "./image/0ddccae723d85a703b798a5e682c23c1.png";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		// return () => {
		// 	window.removeEventListener("scroll");
		// };
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src={Nlogo}
				alt="Netflix Logo"
			/>
			<img
				className="nav__avatar"
				src={logo}
				alt="Avatar logo"
			/>
		</div>
	);
}

export default Nav;
