import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
// import Showpage from './Showpage';
import Footer from './Footer';
import Login from './Login';
import Destinations from './Destinations';
import SignUp from './Signup';
import Planner from './Planner';
import Places from './Places';
import UpdateDelete from './UpdateDelete';
import Showplace from './Showplace';
export default function App() {
	const [query, updateQuery] = useState({
		baseURL: 'http://api.opentripmap.com/0.1/en/places/geoname?name=',
		place: '',
		apiKey:
			'&apikey=' + '5ae2e3f221c38a28845f05b6f1817c4c804559fb72d4dddf45a089c7',

		searchURL: ''
	});

	const [place, setPlace] = useState('');

	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					console.log(data);
					await setPlace(data);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'http://api.opentripmap.com/0.1/en/places/geoname?name=',
						place: '',
						apiKey:
							'&apikey=' +
							'5ae2e3f221c38a28845f05b6f1817c4c804559fb72d4dddf45a089c7',

						searchURL: ''
					});
				}
			}
		})();
	}, [query]);

	const handleChange = e => {
		updateQuery({ ...query, ...{ [e.target.id]: e.target.value } });
	};

	const handleSubmit = e => {
		e.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.place + query.apiKey
		});
	};

	return (
		<Router>
			<Header />
			<Route exact path="/">
				{/* <Showpage /> */}

				<div className="showpage">
					<div className="overlay">
						<h1>Vacation's Tours</h1>
						<p>Inspiring Destinations Within Your Reach</p> <br />
						<form onSubmit={handleSubmit}>
							<label htmlFor="place"></label>
							<input
								id="place"
								type="text"
								value={query.place}
								onChange={handleChange}
							/>
							<input className="button1" type="submit" value="Find New Place" />
						</form>
						{/* <a href={query.searchURL}>{query.searchURL}</a> */}
						<div className={'page'}></div>
						{place ? <Places place={place} /> : ''}
					</div>
				</div>
			</Route>

			<Route path="/planner">
				<Planner />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/signup">
				<SignUp />
			</Route>
			<Route path="/updatedelete">
				<UpdateDelete />
			</Route>
			<Route path="/place/:id" component={Showplace} />

			<Destinations />

			<Footer />
		</Router>
	);
}
