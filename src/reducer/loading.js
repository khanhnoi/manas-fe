import * as types from '../constants/actionType';

const loading = (state = true, action) => {
	switch (action.type) {
		case types.LOADING_PAGE: {
			return action.status;
		}
		default:
			return state;
	}
};

export default loading;
