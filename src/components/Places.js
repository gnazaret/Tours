import React, { useState, useEffect } from 'react';

export default function Places(props) {
	// const [query, updateQuery] = useState({
	// 	baseURL: 'http://api.opentripmap.com/0.1/en/places/geoname?name=',
	// 	place: '',
	// 	apiKey:
	// 		'&apikey=' + '5ae2e3f221c38a28845f05b6f1817c4c804559fb72d4dddf45a089c7',

	// 	searchURL: ''
	// });

	// const [place, setPlace] = useState({});

	// useEffect(() => {
	// 	(async () => {
	// 		if (query.searchURL) {
	// 			try {
	// 				const response = await fetch(query.searchURL);
	// 				const data = await response.json();
	// 				console.log(data);
	// 				await setPlace(data);
	// 			} catch (error) {
	// 				console.error(error);
	// 			} finally {
	// 				updateQuery({
	// 					baseURL: 'http://api.opentripmap.com/0.1/en/places/geoname?name=',
	// 					place: '',
	// 					apiKey:
	// 						'&apikey=' +
	// 						'5ae2e3f221c38a28845f05b6f1817c4c804559fb72d4dddf45a089c7',

	// 					searchURL: ''
	// 				});
	// 			}
	// 		}
	// 	})();
	// }, [query]);

	const handleClick = async (newPlace, e) => {
		e.preventDefault();
		const body = JSON.stringify({
			country: newPlace.country,
			name: newPlace.name,
			population: newPlace.population
		});
		// console.log(newPlace);
		try {
			const response = await fetch('/api/places', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			});
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="results">
			<h2>Name: {props.place.name}</h2>
			<br />
			<h3>Country: {props.place.country}</h3>
			<br />

			<h3>Population: {props.place.population}</h3>
			<br />
			<form className="form" onSubmit={e => handleClick(props.place, e)}>
				<button className="button1">Add to Planner</button>

				{/* <button className="button1">Delete</button> */}
			</form>
		</div>
	);
}
