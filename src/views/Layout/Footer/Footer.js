import React from 'react';
import { Link } from 'react-router-dom';

function RecountFooter() {

	return (
		<footer className={'general-module page-footer'}>
			<div className={'mod-body-wrapper'}>
				<ul className={'footer-links-list inline-list'}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about-me">About</Link>
					</li>
					<li>
						<Link to="/edit-profile">Edit Profile</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default RecountFooter;
