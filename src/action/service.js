import { postDataWithParams, getDataByID } from './../services/base_services';
import { SERVICE_LIST_URL, DETAIL_SERVICE_URL } from '../constants/Config';
import * as types from './../constants/actionType';
import { destructServerMessage } from '../helpers/error';
import { loadingPage } from './loading'


const serviceRequest = status => {
  return {
    type: types.SERVICE_REQUEST,
    status
  }
}

// GET LIST SERVICE

const getListService = (data, paginate) => {
  return {
    type: types.GET_SERVICE_LIST,
    data,
    paginate
  }
}

export const getListServiceRequest = (search, params) => dispatch => {
  dispatch(serviceRequest(true));
  dispatch(loadingPage(true));

  setTimeout(() => {
    postDataWithParams(SERVICE_LIST_URL, search, params).then(res => {
      dispatch(getListService(res.data));
      dispatch(serviceRequest(false));
      dispatch(loadingPage(false));

    }).catch(error => {
      dispatch(serviceRequest(false));
      dispatch(loadingPage(false));
      return Promise.reject(error)
    })
  }, 800)
}

// GET DETAIL SERVICE
const getService = (data, status) => {
  return {
    type: types.GET_SERVICE_DETAIL,
    data,
    status
  }
}

export const getDetailServiceRequest = (id) => dispatch => {
  dispatch(serviceRequest(true));
  dispatch(loadingPage(true));
  setTimeout(() => {
    return getDataByID(DETAIL_SERVICE_URL, id).then(res => {
      dispatch(getService(res.data, true));
      dispatch(serviceRequest(false));
      dispatch(loadingPage(false));

      return Promise.resolve({ res });
    }).catch((error) => {
      let errs = destructServerMessage(error);
      dispatch(getService(errs, false));
      dispatch(serviceRequest(false));
      dispatch(loadingPage(false));

      return Promise.reject(error)
    });
  },800)
}