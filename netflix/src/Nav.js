import React, { useEffect, useState } from "react";
import netflix from './netflix-logo-removebg-preview.png'
import "./Nav.css";
function Nav() {
	const [show, handleShow] = useState(false);
	const transitionNavbar = () => {
        if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		return () => window.removeEventListener("scroll", transitionNavbar);
	}, []);
	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img
					className="nav__logo"
					src={netflix}
					alt="neflix-logo"
				/>
				<img
					className="nav__avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="avatar"
				/>
			</div>
		</div>
	);
}

export default Nav;
