import * as types from './../constants/actionType';


export const searchText = (text) => {
    return {
        type: types.SEARCH_TEXT,
        text
    }
}