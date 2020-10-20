import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';

import homeReducer from '../views/Home/HomeSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		home: homeReducer
	},
});
