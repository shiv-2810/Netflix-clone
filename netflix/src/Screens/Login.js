import React from "react";
import "./Login.css";
import netflix from "../netflix-logo-removebg-preview.png";
function Login() {
	return (
		<div className="login">
			<div className="loginScreen__background">
				<img className="loginScreen__logo" src={netflix} alt="" />
				<button className="loginScreen__button">Sign In</button>
				<div className="loginScreen__gradient"></div>
			</div>
			<div className="loginScreen__body">
				<>
					<h1>Unlimited films ,TV programmes and more. </h1>
					<h2>Watch anywhere, Cancel at any time.</h2>
					<h3>
						Ready to watch? Enter your email to create or restart your
						membership.
					</h3>
					<div className="loginScreen__input">
						<form>
              <input type="email" placeholder="Email Address" />
              <button className="loginScreen__getStarted">GET STARTED</button>
						</form>
					</div>
				</>
			</div>
		</div>
	);
}

export default Login;
