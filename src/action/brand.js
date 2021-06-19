import { postDataWithParams, getDataByID } from './../services/base_services';
import { BRAND_LIST_URL, DETAIL_BRAND_URL } from '../constants/Config';
import * as types from './../constants/actionType';
import { destructServerMessage } from '../helpers/error';
import { loadingPage } from './loading'


const brandRequest = status => {
  return {
    type: types.BRAND_REQUEST,
    status
  }
}

// GET LIST BRAND

const getListBrand = (data, paginate) => {
  return {
    type: types.GET_BRAND_LIST,
    data,
    paginate
  }
}

export const getListBrandRequest = (search, params) => dispatch => {
  dispatch(brandRequest(true));
  dispatch(loadingPage(true));

  setTimeout(() => {
    postDataWithParams(BRAND_LIST_URL, search, params).then(res => {
      dispatch(getListBrand(res.data));
      dispatch(brandRequest(false));
      dispatch(loadingPage(false));
    }).catch(error => {
      dispatch(loadingPage(false));
      dispatch(brandRequest(false));
      return Promise.reject(error)
    })
  }, 800)
}


const getListSearch = ( ) => {
  return {
    type: types.GET_BRAND_LIST_NULL,

  }
}

export const SearchListBrandRequest = (search, params) => dispatch => {
  dispatch(getListSearch())
  postDataWithParams(BRAND_LIST_URL, search, params).then(res => {
    dispatch(getListBrand(res.data));
  }).catch(error => {
    return Promise.reject(error)
  })
}

export const getListLoadmore = (search, params) => dispatch => {
  postDataWithParams(BRAND_LIST_URL, search, params).then(res => {
    dispatch(getLoadmore(res.data));
    dispatch(loadingPage(false));
  }).catch(error => {
    dispatch(loadingPage(false));

    return Promise.reject(error)

  })
}

const getLoadmore = (data) => {
  return {
    type: types.GET_BRAND_LIST_LOADMORE,
    data
  }
}

// GET DETAIL BRAND
const getBrand = (data, status) => {
  return {
    type: types.GET_BRAND_DETAIL,
    data,
    status
  }
}

export const getDetailBrandRequest = (id) => dispatch => {
  dispatch(loadingPage(true));
  setTimeout(() => {
    getDataByID(DETAIL_BRAND_URL, id).then(res => {
      dispatch(getBrand(res.data, true));
      dispatch(brandRequest(false));
      dispatch(loadingPage(false));
      return Promise.resolve({ res });
    }).catch((error) => {
      let errs = destructServerMessage(error);
      dispatch(getBrand(errs, false));
      dispatch(brandRequest(false));
      dispatch(loadingPage(false));
      return Promise.reject(error)
    });
  }, 800)
}