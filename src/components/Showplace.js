import React, { useState, useEffect } from 'react';

export default function Showplace(props) {
	const [place, setPlace] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/places/${props.match.params.id}`);
				const data = await response.json();
				setPlace(data);
			} catch (err) {
				console.error(err);
			}
		})();
	});
	return (
		<div className="showpage">
			<div className="overlay">
				<h1>Vacation's Tours</h1>
				<p>Inspiring Destinations Within Your Reach</p>
			</div>
			<h1>{place.country ? place.country : ''}</h1>
			<p>{place.name ? place.name : ''}</p>
			<button>I AM HERE IN THE SHOWPLACE</button>
		</div>
	);
}
