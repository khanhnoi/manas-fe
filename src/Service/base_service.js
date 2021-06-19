import axios from 'axios';
import { BASE_URL } from './../constants/Config';

// CREATE AN INSTANCE OF AXIOS
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 20000
})

const getData = async (url) => {
    try {
        const result = await axiosInstance.get(url, { headers: { 'locale': localStorage.getItem('i18nextLng') } });
        // const result = await axiosInstance.get(url);
        return result;
    }
    catch (e) {
        throw e
    }
}

const postData = async (url, data) => {
    try {
        const result = await axiosInstance.post(url, data);
        return result;
    } catch (e) {
        throw e;
    }
};

const postDataWithParams = async (url, data, params) => {

    try {
      const result = await axiosInstance.post(url, data,
        { params: params, headers: { 'locale': localStorage.getItem('i18nextLng') } }
      );
      return result;
    } catch (e) {
      throw e;
    }
  };
  
  const getDataByID = async (url, id) => {
    try {
      const result = await axiosInstance.get(`${url}/${id}`, { headers: { 'locale': localStorage.getItem('i18nextLng') } });
      return result;
    } catch (e) {
      throw e;
    }
  };

export {
    getData,
    postData,
    postDataWithParams,
  getDataByID
}
