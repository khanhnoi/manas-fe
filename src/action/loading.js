
import * as types from './../constants/actionType';


export const loadingPage = status => {
    return {
        type: types.LOADING_PAGE,
        status
    }
}
