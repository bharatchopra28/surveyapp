import { FETCH_USER } from '../actions/types';

export default (state = {}, action) => {
	console.log(action.payload);
	switch(action.type) {
		default: 
			return state;
	}
};