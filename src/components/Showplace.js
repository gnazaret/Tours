import React, { useState, useEffect } from 'react';

const Showplace = props => {
	const [place, setPlace] = useState({});
	const [placeDelete, setPlaceDelete] = useState(false);

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
	});
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
			<div className="show">
				<h2>{place.country}</h2>
				<button className="buttonPlanner">{place.name}</button>
				<button className="buttonDelete" onClick={handleDelete}>
					Delete Place
				</button>
			</div>
		</div>
	);
};

export default Showplace;
