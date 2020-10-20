import React, { useState, useEffect } from 'react';

// Import Redux / State management
import { useSelector, useDispatch } from 'react-redux';
import {
    GET_USER_DATA,
    GET_FAMILY_MEMBERS,
    SET_USER_NAME,
    SET_YEAR_BORN,
    SET_HOMETOWN,
} from '../Home/HomeSlice';

// Import Components
import RecountInput from "../../components/Input/RecountInput";

function RecountEditProfile() {

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
    const dispatch = useDispatch();
    const currentUser = useSelector(GET_USER_DATA);
    const familyMembers = useSelector(GET_FAMILY_MEMBERS);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {

        if (currentUser && familyMembers) {
            processUserFamilyData();
        }
    }, [currentUser, familyMembers]);

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

    function onNameChange(newVal) {
        // Update the store with new name
        dispatch(SET_USER_NAME(newVal));
    }

    function onYearBornChange(newVal) {
        // Update the store with new name
        dispatch(SET_YEAR_BORN(newVal));
    }

    function onHometownChange(newVal) {
        // Update the store with new name
        dispatch(SET_HOMETOWN(newVal));
    }

    function removeRelation(index, rel) {

        // make a copy of the data
        let userFamilyDataCopy = {...userFamilyData};

        // mutate the data
        userFamilyDataCopy[rel].splice(index, 1);

        // update local state
        setUserFamilyData(userFamilyDataCopy);

        // TODO: this should update the store data as well, but that is more complicated with updating multiple user's info
    }

    return (
        <div className={'general-module edit-page'}>
            <div className={'mod-header-wrapper'}>
                <h2>Edit Profile</h2>
            </div>
            <div className={'mod-body-wrapper'}>
                <h3>Update Personal Info</h3>
                <ul>
                    <li>
                        <RecountInput label={ 'Name' }
                                      value={ currentUser.name }
                                      customClass={ 'name-input' }
                                      inputType={ 'text' }
                                      onChange={ (value) => onNameChange(value) } />
                    </li>
                    <li>
                        <RecountInput label={ 'Year Born' }
                                      value={ currentUser.born }
                                      customClass={ 'year-born-input' }
                                      inputType={ 'number' }
                                      onChange={ (value) => onYearBornChange(value) } />
                    </li>
                    <li>
                        <RecountInput label={ 'Hometown' }
                                      value={ currentUser.hometown }
                                      customClass={ 'hometown-input' }
                                      inputType={ 'text' }
                                      onChange={ (value) => onHometownChange(value) } />
                    </li>
                </ul>
                <h3>Update Family Connections</h3>
                <ul>
                    { userFamilyData && userFamilyData.parents.length > 0 && userFamilyData.parents.map((person, index) => (
                        <li key={person.id}>
                            Parent: { person.name }
                            <span onClick={() => removeRelation(index, 'parents')} className={'remove-link'}>(Remove)</span>
                        </li>
                    )) }
                    { userFamilyData && userFamilyData.siblings.length > 0 && userFamilyData.siblings.map((person, index) => (
                        <li key={person.id}>
                            Sibling: { person.name }
                            <span onClick={() => removeRelation(index, 'siblings')} className={'remove-link'}>(Remove)</span>
                        </li>
                    )) }
                    { userFamilyData && userFamilyData.spouse.length > 0 && userFamilyData.spouse.map((person, index) => (
                        <li key={person.id}>
                            Spouse: { person.name }
                            <span onClick={() => removeRelation(index, 'spouse')} className={'remove-link'}>(Remove)</span>
                        </li>
                    )) }
                    { userFamilyData && userFamilyData.children.length > 0 && userFamilyData.children.map((person, index) => (
                        <li key={person.id}>
                            Child: { person.name }
                            <span onClick={() => removeRelation(index, 'children')} className={'remove-link'}>(Remove)</span>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
}

export default RecountEditProfile;
