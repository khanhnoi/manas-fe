import { postDataWithParams, getDataByID } from './../services/base_services';
import { NEWS_LIST_URL, DETAIL_NEWS_URL } from '../constants/Config';
import * as types from './../constants/actionType';
import { destructServerMessage } from '../helpers/error';
import { loadingPage } from './loading'


const newsRequest = status => {
  return {
    type: types.NEWS_REQUEST,
    status
  }
}

// GET LIST NEWS

const getListNews = (data, paginate) => {
  return {
    type: types.GET_NEWS_LIST,
    data,
    paginate
  }
}

export const getListNewsRequest = (search, params) => dispatch => {
  dispatch(newsRequest(true));
  dispatch(loadingPage(true));

  setTimeout(() => {
    postDataWithParams(NEWS_LIST_URL, search, params).then(res => {
      dispatch(getListNews(res.data));
      dispatch(newsRequest(false));
      dispatch(loadingPage(false));

    }).catch(error => {
      dispatch(newsRequest(false));
      dispatch(loadingPage(false));

      return Promise.reject(error)
    })
  }, 800)
}

export const getListSearch = (search, params) => dispatch => {
  postDataWithParams(NEWS_LIST_URL, search, params).then(res => {
    dispatch(getListNews(res.data));
    dispatch(loadingPage(false));
  }).catch(error => {
    dispatch(loadingPage(false));

    return Promise.reject(error)
  })
}

// GET DETAIL NEWS
const getNews = (data, status) => {
  return {
    type: types.GET_NEWS_DETAIL,
    data,
    status
  }
}

export const getDetailNewsRequest = (id) => dispatch => {
  dispatch(newsRequest(true));
  dispatch(loadingPage(true));

  setTimeout(() => {
    return getDataByID(DETAIL_NEWS_URL, id).then(res => {
      dispatch(getNews(res.data, true));
      dispatch(newsRequest(false));
      dispatch(loadingPage(false));

      return Promise.resolve({ res });
    }).catch((error) => {
      let errs = destructServerMessage(error);
      dispatch(getNews(errs, false));
      dispatch(newsRequest(false));
      dispatch(loadingPage(false));

      return Promise.reject(error)
    });
  }, 800)
}