import { USER_PROFILE_KEY, USER_SESSION_KEY } from 'utils/userConstants';

/**
 * Xóa token của user khi user đăng xuất khỏi app
 */
export const removeUserSession = () => {
  window.localStorage.removeItem(USER_SESSION_KEY);
//   window.localStorage.removeItem(USER_PROFILE_KEY);
};

/**
 * Get token existed in localstorage
 * @returns Token string
 */
export const getUserSession = () => {
  const data = localStorage.getItem(USER_SESSION_KEY);
  return data ? JSON.parse(data) : null;
};

/**
 * Lưu lại token của user
 * @param {String} data Chuỗi token
 * @returns undefined
 */
export const saveUserProfile = (data) => window.localStorage.setItem(USER_PROFILE_KEY, data);

/**
 * Xóa token của user trong localstorage khi token hết hạn
 */
export const removeUserSessionWhenExpired = () => {
  if (
    ![].filter((item) => item.path === document.location.pathname).length // publicRoutes
    && ![].filter((item) => item.path === document.location.pathname).length // unauthorizeRoutes
  ) {
    window.localStorage.removeItem(USER_SESSION_KEY);
    window.location.href = `${window.location.origin}/app/login`;
  }
};
