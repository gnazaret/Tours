import React from 'react';

const Login = () => {
	return (
		<>
			<section className="showpage login">
				<div className="overlay">
					<h1>Vacation's Tours</h1>
					<p>Inspiring Destinations Within Your Reach</p> <br />
					<form className="form">
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Type your username"
							required
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password must be 8 character"
							required
						/>

						<button type="submit">Log In</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Login;
