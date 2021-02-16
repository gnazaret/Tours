import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header className="header">
				<div>
					<Link className="links" to="/">
						HOME
					</Link>
					<Link className="links" to="/planner">
						{' '}
						PLANNER{' '}
					</Link>
				</div>

				<nav className="navbar">
					<ul>
						<Link className="links" to="/login">
							LOGIN
						</Link>
						<Link className="links" to="/signup">
							SIGN UP
						</Link>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
