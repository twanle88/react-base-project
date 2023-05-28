import { message } from 'antd';
import axios from 'axios';
import { getUserSession, removeUserSessionWhenExpired } from 'helpers/authHandlers';
// import { decryptionData } from 'utils/crypto';

const userSession = getUserSession();
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
});

axiosInstance.defaults.timeout = 20000;

if (userSession) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${getUserSession()}`;
}

axiosInstance.defaults.transformResponse = (data) => {
  data = JSON.parse(data);
  // nếu như có mã data thì dùng cái này
  // if (data?.iv) {
  //   return decryptionData(
  //     data.data,
  //     process.env.REACT_APP_DECRYPT_KEY,
  //     data.iv,
  //   );
  // }
  return data;
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(error);
    }
    if (
      error?.response?.status === 401
      || error?.response?.data?.message === 'jwt expired'
    ) {
      // add refresh token here
      removeUserSessionWhenExpired();
    }
    if (error?.response?.status === 405) {
      message.destroy();
      message.error(
        error?.response?.data?.message || 'Internal Server Error',
        5,
      );
    }
    return error.response;
  },
);

export { axiosInstance };
