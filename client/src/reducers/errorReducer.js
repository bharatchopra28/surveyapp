import { SET_ERROR } from '../actions/types';

const INITIAL_STATE = { error: '' };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_ERROR:
			return { error: action.payload };
		default: 
			return INITIAL_STATE;
	}
};