import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
	// const [userName, setUsername] = useState('');
	// const [password, setPassword] = useState('');
	// const [password2, setPassword2] = useState('');

	const submit = e => {
		e.preventDefault();
		const data = {
			user_name: this.userName,
			password: this.password,
			password2: this.password2
		};
		axios
			.post('http://localhost8000/signup', data)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<>
			<section className="showpage login">
				<div className="overlay">
					<h1>Vacation's Tours</h1>
					<p>Inspiring Destinations Within Your Reach</p> <br />
					<form onSubmit={submit} className="form">
						{/* <input
							type="email"
							name="email"
							id="email"
							placeholder="Your email address"
							required
						/> */}
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Type your username"
							required
							onChange={e => (this.userName = e.target.value)}
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password must be 8 character"
							required
							onChange={e => (this.password = e.target.value)}
						/>
						<input
							type="password"
							name="password"
							id="password2"
							placeholder="Confirm password"
							required
							onChange={e => (this.password2 = e.target.value)}
						/>
						<button type="submit">Sign Up</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Signup;
