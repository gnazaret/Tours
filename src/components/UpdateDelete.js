import React, { useState, useEffect, useRef } from 'react';

export default function UpdateDelete(props) {
	const [place, setPlace] = useState({
		country: '',
		name: ''
	});

	const [placeDelete, setPlaceDelete] = useState(false);
	const countryInput = useRef(null);
	const nameInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/places/${props.match.params.id}`);
				const data = await response.json();
				setPlace(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [place, placeDelete]);
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/places/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'aplication/json'
				}
			});
			const data = await response.json();
			setPlaceDelete(!placeDelete);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="showpage">
			<div className="overlay">
				<h1>Vacation's Tours</h1>
				<p>Inspiring Destinations Within Your Reach</p>
			</div>
			<div>
				<h1>{place.country ? place.country : ''}</h1>
				<p>{place.name ? place.name : ''}</p>
				<button onClick={handleDelete}>Delete Place</button>
			</div>
		</div>
	);
}
