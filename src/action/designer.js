import { postDataWithParams, getDataByID, getTakenData } from './../services/base_services';
import { DESIGNER_LIST_URL, DETAIL_DESIGNER_URL } from '../constants/Config';
import * as types from './../constants/actionType';
import { destructServerMessage } from '../helpers/error';
import { loadingPage } from './loading'


const designerRequest = status => {
  return {
    type: types.DESIGNER_REQUEST,
    status
  }
}

// GET LIST DESIGNER

const getListDesigner = (data, paginate) => {
  return {
    type: types.GET_DESIGNER_LIST,
    data,
    paginate
  }
}



export const getListDesignerRequest = () => dispatch => {
  dispatch(designerRequest(true));
  dispatch(loadingPage(true));
  setTimeout(() => {
    getTakenData(DESIGNER_LIST_URL).then(res => {
      dispatch(getListDesigner(res.data));
      dispatch(designerRequest(false));
      dispatch(loadingPage(false));

    }).catch(error => {
      dispatch(designerRequest(false));
      dispatch(loadingPage(false));

      return Promise.reject(error)
    })
  }, 800)

}

// GET DETAIL DESIGNER
const getDesigner = (data, status) => {
  return {
    type: types.GET_DESIGNER_DETAIL,
    data,
    status
  }
}

export const getDetailDesignerRequest = (id) => dispatch => {
  dispatch(loadingPage(true));
  dispatch(designerRequest(true));

  setTimeout(() => {
    return getDataByID(DETAIL_DESIGNER_URL, id).then(res => {
      dispatch(getDesigner(res.data, true));
      dispatch(designerRequest(false));

      dispatch(loadingPage(false));
      return Promise.resolve({ res });
    }).catch((error) => {
      let errs = destructServerMessage(error);
      dispatch(designerRequest(false));
      dispatch(getDesigner(errs, false));
      dispatch(loadingPage(false));

      return Promise.reject(error)
    });
  }, 800)
}


export const resetState = () => {
  return {
    type: types.RESET_DESIGNER,
  }
}