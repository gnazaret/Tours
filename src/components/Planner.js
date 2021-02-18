import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Planner = props => {
	const [places, setPlaces] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/places');
				const data = await response.json();
				setPlaces(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="showpage">
			<div className="overlay">
				<h1>Vacation's Tours</h1>
				<p>Inspiring Destinations Within Your Reach</p>
			</div>
			{places.map(place => {
				return (
					<div className="planner" key={place._id}>
						<Link to={`/${place._id}`}>
							<button className="buttonPlanner">{place.name}</button>
						</Link>
						<h2>{place.country}</h2>
					</div>
				);
			})}
			{/* <form onSubmit={handleSubmit}></form>
			<button>Update</button> */}
		</div>
	);
};

export default Planner;
