import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import Redux / State management
import { useSelector, useDispatch } from 'react-redux';
import {
	GET_USER_DATA,
	GET_FAMILY_MEMBERS
} from '../Home/HomeSlice';

// Import Components
import RecountTooltip from "../../components/Tooltip/RecountTooltip";

function RecountAboutMe() {

	// Local state
	const [userFamilyData, setUserFamilyData] = useState(
		{
			parents: [],
			siblings: [],
			spouse: [],
			children: []
		}
	);

	// Store state
	const currentUser = useSelector(GET_USER_DATA);
	const familyMembers = useSelector(GET_FAMILY_MEMBERS);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {

		if (currentUser && familyMembers) {
			processUserFamilyData();
		}
	}, []);

	function processUserFamilyData() {
		let userFamilyData = {
			parents: [],
			siblings: [],
			spouse: [],
			children: []
		};

		familyMembers.forEach(function(person) {

			// look for spouse
			if (
				(person.hasOwnProperty('spouseId') && person.spouseId === currentUser.id) ||
				(currentUser.hasOwnProperty('spouseId') && currentUser.spouseId === person.id)
			) {
				userFamilyData.spouse.push(person);
			}

			// look for children
			if (
				(person.hasOwnProperty('parentId1') && person.parentId1 === currentUser.id) ||
				(person.hasOwnProperty('parentId2') && person.parentId2 === currentUser.id)
			) {
				userFamilyData.children.push(person);
			}

			// look for parents && siblings
			if (currentUser.hasOwnProperty('parentId1') || currentUser.hasOwnProperty('parentId2')) {

				if (currentUser.parentId1 === person.id || currentUser.parentId2 === person.id) {

					// current person is a parent
					userFamilyData.parents.push(person);

				} else if ( // TODO: expand check in the case parent id position is reversed (parentId1 === parentId2 && parentId2 === parentId1)
					(person.hasOwnProperty('parentId1') && person.parentId1 === currentUser.parentId1) &&
					(person.hasOwnProperty('parentId2') && person.parentId2 === currentUser.parentId2)
				) {

					// current person is a sibling
					userFamilyData.siblings.push(person);
				}
			}
		});

		// set local state
		setUserFamilyData(userFamilyData);
	}

	function getPersonData(person, rel) {
		return (
			<span className={'family-member-name'}>
				{ person.name }
				<RecountTooltip type={ 'info' }
						   position={ 'left' }>
					<ul>
						<li>Relationship: { rel }</li>
						<li>Year Born: { person.born }</li>
						<li>Birthplace: { person.hometown }</li>
					</ul>
				</RecountTooltip>
			</span>
		);
	}

	return (
		<div className={'general-module about-me-page'}>
			<div className={'mod-header-wrapper'}>
				<h2>
					{ currentUser.name }
					<span className={'header-link'}>
						<Link to="/edit-profile">(Edit Profile)</Link>
					</span>

				</h2>
			</div>
			<div className={'mod-body-wrapper'}>
				<section className={'primary-content'}>
					<h3>About You:</h3>
					<ul>
						<li>Year Born: { currentUser.born }</li>
						<li>Birthplace: { currentUser.hometown }</li>
					</ul>
				</section>
				<section className={'secondary-content'}>
					<h3>Your Family:</h3>
					<ul>
						{ userFamilyData && userFamilyData.parents.length > 0 && userFamilyData.parents.map(person => (
							<li key={person.id} className={'family-member-wrapper'}>{ getPersonData(person, 'Parent') }</li>
						)) }
						{ userFamilyData && userFamilyData.siblings.length > 0 && userFamilyData.siblings.map(person => (
							<li key={person.id} className={'family-member-wrapper'}>{ getPersonData(person, 'Sibling') }</li>
						)) }
						{ userFamilyData && userFamilyData.spouse.length > 0 && userFamilyData.spouse.map(person => (
							<li key={person.id} className={'family-member-wrapper'}>{ getPersonData(person, 'Spouse') }</li>
						)) }
						{ userFamilyData && userFamilyData.children.length > 0 && userFamilyData.children.map(person => (
							<li key={person.id} className={'family-member-wrapper'}>{ getPersonData(person, 'Child') }</li>
						)) }
					</ul>
				</section>
			</div>
		</div>
	);
}

export default RecountAboutMe;
