import * as types from './../constants/actionType';
import * as urls from '../constants/Config'
import axios from 'axios';
import {getData} from './../Service/base_service';
// GET HOME PAGE

export const getHomePageRequest = ()=> dispatch => {
    

    getData(urls.HOME_LIST_URL)
    .then(res => {
        // console.log(res);
        if (res.status === 200) {
            // console.log("data:");
            // console.log(res.data.data);
            dispatch({type: types.HOME_REQUEST, payload: res.data.data})
        }           
    })

    // axios.get(`${urls.BASE_URL}${urls.HOME_LIST_URL}`)
    // .then(res => {
    //     console.log(res);
    //     if (res.status === 200) {
    //         console.log("data:");
    //         console.log(res.data.data);
    //         dispatch({type: types.HOME_REQUEST, payload: res.data.data})
    //     }           
    // })
}