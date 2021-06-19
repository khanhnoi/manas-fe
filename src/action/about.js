import * as types from './../constants/actionType';
import * as urls from '../constants/Config'
import {getData} from './../Service/base_service';
// GET HOME PAGE

export const getAboutPageRequest = () => dispatch => {
    

    getData(urls.GET_ABOUT_URL)
    .then(res => {
         console.log("getAbout");
         console.log(res);
        // if (res.status === 200) {
            // console.log("data:");
            // console.log(res.data.data);
        //     dispatch({type: types.HOME_REQUEST, payload: res.data.data})
        // }           
    })
}