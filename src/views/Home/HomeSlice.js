import { createSlice } from '@reduxjs/toolkit';



export const HomeSlice = createSlice({
    name: 'home',
    initialState: {
        currentUserData: {
            "id": 3,
            "name": "Manuel Moody",
            "born": 1992,
            "parentId1": 0,
            "parentId2": 1,
            "hometown": "Boston"
        },
        familyMembers: [
            {
                "id": 0,
                "name": "Emelia Moody",
                "born": 1950,
                "hometown": "Boston"
            },
            {
                "id": 1,
                "name": "Nathanial Stewart",
                "born": 1950,
                "spouseId": 0,
                "hometown": "Boston"
            },
            {
                "id": 2,
                "name": "Harry Moody",
                "born": 1984,
                "parentId1": 0,
                "parentId2": 1,
                "hometown": "Boston"
            },
            {
                "id": 3,
                "name": "Manuel Moody",
                "born": 1992,
                "parentId1": 0,
                "parentId2": 1,
                "hometown": "Boston"
            },
            {
                "id": 4,
                "name": "Eleanor Fuentes",
                "born": 1983,
                "spouseId": 2,
                "hometown": "Boston"
            },
            {
                "id": 5,
                "name": "Mario Fuentes",
                "born": 2017,
                "parentId1": 2,
                "parentId2": 4,
                "hometown": "Boston"
            },
            {
                "id": 6,
                "name": "Jeffery Fuentes",
                "born": 2021,
                "parentId1": 2,
                "parentId2": 4,
                "hometown": "Boston"
            },
            {
                "id": 7,
                "name": "Kelly Gorry",
                "born": 2020,
                "spouseId": 2,
                "hometown": "Boston"
            },
            {
                "id": 8,
                "name": "Nicole Gorry",
                "born": 2061,
                "parentId1": 2,
                "parentId2": 7,
                "hometown": "Boston"
            },
            {
                "id": 9,
                "name": "Cheryl Alabaster",
                "born": 2001,
                "spouseId": 3,
                "hometown": "Boston"
            },
            {
                "id": 10,
                "name": "Jessica Alabaster",
                "born": 2028,
                "parentId1": 3,
                "parentId2": 9,
                "hometown": "Boston"
            },
            {
                "id": 11,
                "name": "Howard Alabaster",
                "born": 2037,
                "parentId1": 3,
                "parentId2": 9,
                "hometown": "Boston"
            },
            {
                "id": 12,
                "name": "Laura Alabaster",
                "born": 2043,
                "parentId1": 3,
                "parentId2": 9,
                "hometown": "Boston"
            },
            {
                "id": 13,
                "name": "Matthew Montain",
                "born": 2068,
                "spouseId": 8,
                "hometown": "Boston"
            },
            {
                "id": 14,
                "name": "Julie Algebra",
                "born": 2022,
                "spouseId": 5,
                "hometown": "Boston"
            },
            {
                "id": 15,
                "name": "Eleanor Algebra",
                "born": 2057,
                "parentId1": 5,
                "parentId2": 14,
                "hometown": "Boston"
            },
            {
                "id": 16,
                "name": "Glenn Glenn",
                "born": 2052,
                "spouseId": 15,
                "hometown": "Boston"
            },
            {
                "id": 17,
                "name": "Juan Dijon",
                "born": 2024,
                "spouseId": 10,
                "hometown": "Boston"
            },
            {
                "id": 18,
                "name": "Amy Alabaster",
                "born": 2059,
                "parentId1": 10,
                "parentId2": 17,
                "hometown": "Boston"
            },
            {
                "id": 19,
                "name": "Curtis Smith",
                "born": 2033,
                "spouseId": 12,
                "hometown": "Boston"
            },
            {
                "id": 20,
                "name": "Allen Alabaster",
                "born": 2081,
                "parentId1": 12,
                "parentId2": 19,
                "hometown": "Boston"
            },
            {
                "id": 21,
                "name": "Eliza Gomez",
                "born": 1947,
                "hometown": "Philadelphia"
            },
            {
                "id": 22,
                "name": "Andrew Bowers",
                "born": 1942,
                "spouseId": 21,
                "hometown": "Philadelphia"
            },
            {
                "id": 23,
                "name": "Howard Gomez",
                "born": 1985,
                "parentId1": 21,
                "parentId2": 22,
                "hometown": "Philadelphia"
            },
            {
                "id": 24,
                "name": "Joanne Gomez",
                "born": 1989,
                "parentId1": 21,
                "parentId2": 22,
                "hometown": "Philadelphia"
            },
            {
                "id": 25,
                "name": "Rhonda Roundabout",
                "born": 1990,
                "spouseId": 23,
                "hometown": "Philadelphia"
            },
            {
                "id": 26,
                "name": "Ryan Five",
                "born": 1989,
                "spouseId": 24,
                "hometown": "Philadelphia"
            },
            {
                "id": 27,
                "name": "Anne Gomez",
                "born": 2029,
                "parentId1": 24,
                "parentId2": 26,
                "hometown": "Philadelphia"
            },
            {
                "id": 28,
                "name": "Theodore Brown",
                "born": 2020,
                "spouseId": 24,
                "hometown": "Philadelphia"
            },
            {
                "id": 29,
                "name": "Gloria Gomez",
                "born": 2054,
                "parentId1": 24,
                "parentId2": 28,
                "hometown": "Philadelphia"
            },
            {
                "id": 30,
                "name": "Roger Red",
                "born": 2031,
                "spouseId": 27,
                "hometown": "Philadelphia"
            },
            {
                "id": 31,
                "name": "Juan Again",
                "born": 2049,
                "spouseId": 29,
                "hometown": "Philadelphia"
            },
            {
                "id": 32,
                "name": "Peter Pastime",
                "born": 2073,
                "spouseId": 29,
                "hometown": "Philadelphia"
            },
            {
                "id": 33,
                "name": "Chad Gomez",
                "born": 2103,
                "parentId1": 29,
                "parentId2": 32,
                "hometown": "Philadelphia"
            }
        ],
    },
    reducers: {
        SET_USER_DATA: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.currentUserData = action.payload;
        },
        SET_USER_NAME: (state, action) => {
            state.currentUserData.name = action.payload;

            for (let i = 0; i < state.familyMembers.length; i++) {
                if (state.familyMembers[i].id === state.currentUserData.id) {
                    state.familyMembers[i].name = action.payload;
                    break;
                }
            }
        },
        SET_YEAR_BORN: (state, action) => {
            state.currentUserData.born = action.payload;

            for (let i = 0; i < state.familyMembers.length; i++) {
                if (state.familyMembers[i].id === state.currentUserData.id) {
                    state.familyMembers[i].born = action.payload;
                    break;
                }
            }
        },
        SET_HOMETOWN: (state, action) => {
            state.currentUserData.hometown = action.payload;

            for (let i = 0; i < state.familyMembers.length; i++) {
                if (state.familyMembers[i].id === state.currentUserData.id) {
                    state.familyMembers[i].hometown = action.payload;
                    break;
                }
            }
        },
    }
});

export const { SET_USER_DATA, SET_USER_NAME, SET_YEAR_BORN, SET_HOMETOWN } = HomeSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const GET_USER_DATA = state => state.home.currentUserData;
export const GET_FAMILY_MEMBERS = state => state.home.familyMembers;

export default HomeSlice.reducer;
