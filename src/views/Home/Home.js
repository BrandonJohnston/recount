import React from 'react';

// Import Redux / State management
import { useSelector, useDispatch } from 'react-redux';
import {
	GET_USER_DATA,
	GET_FAMILY_MEMBERS
} from './HomeSlice';

function RecountHome() {

	// Store state
	const currentUser = useSelector(GET_USER_DATA);
	const familyMembers = useSelector(GET_FAMILY_MEMBERS);

	return (
		<div className={'general-module home-page'}>
			<div className={'mod-header-wrapper'}>
				<h2>Your Family Tree</h2>
			</div>
			<div className={'mod-body-wrapper'}>

				<div>
					{ familyMembers.map(person => (
						<p>Name: {person.name}</p>
					)) }
				</div>
			</div>
		</div>
	);
}

export default RecountHome;
