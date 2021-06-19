import { postDataWithParams, getDataByID } from './../services/base_services';
import { SHOWROOM_LIST_URL, DETAIL_SHOWROOM_URL } from '../constants/Config';
import * as types from './../constants/actionType';
import { destructServerMessage } from '../helpers/error';
import { loadingPage } from './loading'

const showroomRequest = status => {
  return {
    type: types.SHOWROOM_REQUEST,
    status
  }
}

// GET LIST SHOWROOM

const getListShowroom = (data, paginate) => {
  return {
    type: types.GET_SHOWROOM_LIST,
    data,
    paginate
  }
}

export const getListShowroomRequest = (search, params) => dispatch => {
  dispatch(showroomRequest(true));
  dispatch(loadingPage(true))
  setTimeout(() => {
    postDataWithParams(SHOWROOM_LIST_URL, search, params).then(res => {
      dispatch(getListShowroom(res.data));
      dispatch(showroomRequest(false));
      dispatch(loadingPage(false))

    }).catch(error => {
      dispatch(showroomRequest(false));
      dispatch(loadingPage(false))

      return Promise.reject(error)
    })
  }, 800)
}



export const searchListShowroomRequest = (search, params) => dispatch => {
  dispatch(getListSearch())

  postDataWithParams(SHOWROOM_LIST_URL, search, params).then(res => {
    dispatch(getListShowroom(res.data));

  }).catch(error => {

    return Promise.reject(error)

  })
}

const getListSearch = () => {
  return {
    type: types.GET_SEARCH_LIST_NULL,

  }
}

export const getListLoadmore = (search, params) => dispatch => {
  postDataWithParams(SHOWROOM_LIST_URL, search, params).then(res => {
    dispatch(getLoadmore(res.data));

  }).catch(error => {

    return Promise.reject(error)

  })
}

const getLoadmore = (data) => {
  return {
    type: types.GET_SHOWROOM_LIST_LOADMORE,
    data
  }
}

// GET DETAIL SHOWROOM
const getShowroom = (data, status) => {
  return {
    type: types.GET_SHOWROOM_DETAIL,
    data,
    status
  }
}

export const getDetailShowroomRequest = (id) => dispatch => {
  dispatch(showroomRequest(true));
  dispatch(loadingPage(true))

  setTimeout(() => {
    return getDataByID(DETAIL_SHOWROOM_URL, id).then(res => {
      dispatch(getShowroom(res.data, true));
      dispatch(showroomRequest(false));
      dispatch(loadingPage(false))
      return Promise.resolve({ res });
    }).catch((error) => {
      let errs = destructServerMessage(error);
      dispatch(getShowroom(errs, false));
      dispatch(showroomRequest(false));
      dispatch(loadingPage(false))
      return Promise.reject(error)
    });
  }, 800)
}