import { axiosInstance } from 'apis/axiosInstance';
import { getUserSession } from 'helpers/authHandlers';

export const loginApi = (payload) => axiosInstance.post('/login', payload);
export const loginSocial = (payload) => axiosInstance.post('/login-social', payload);
export const registerNewUser = (payload) => axiosInstance.post('/register', payload);
export const verifyAccount = (verifyToken) => axiosInstance.get(`/accounts/authorization/activate/${verifyToken}`, {
  headers: {
    Authorization: `Bearer ${getUserSession()}`,
  },
});
export const requestVerify = () => axiosInstance.post('/accounts/request-verify', null, {
  headers: {
    Authorization: `Bearer ${getUserSession()}`,
  },
});
export const forgotPwdGetOtp = (payload) => axiosInstance.post('/password/forgot', payload);
export const resetPwdForgot = (payload) => axiosInstance.post('/password/reset', payload);
export const fetchLogout = () => axiosInstance.get('/logout');