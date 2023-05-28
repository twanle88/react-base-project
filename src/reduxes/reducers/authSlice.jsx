import { createSlice } from '@reduxjs/toolkit';
import { USER_SESSION_KEY, USER_REFRESH_SESSION_KEY } from 'utils/userConstants';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem(USER_SESSION_KEY) ? JSON.parse(localStorage.getItem(USER_SESSION_KEY)) : null,
    refreshToken: localStorage.getItem(USER_REFRESH_SESSION_KEY) ? JSON.parse(localStorage.getItem(USER_REFRESH_SESSION_KEY)) : null,
    profile: null,
    lastPathAccess: null,
  },
  reducers: {
    changeAccessToken: (s, { payload }) => ({ ...s, accessToken: payload }),
    changeRefreshToken: (s, { payload }) => ({ ...s, refreshToken: payload }),
    changeProfile: (s, { payload }) => ({ ...s, profile: payload }),
    changeLastPathAccess: (s, { payload }) => ({ ...s, lastPathAccess: payload }),
  },
});

export const {
  changeAccessToken,
  changeRefreshToken,
  changeProfile,
  changeLastPathAccess,
  changeWalletInformation,
  refetchProfile,
} = authSlice.actions;

export default authSlice.reducer;
