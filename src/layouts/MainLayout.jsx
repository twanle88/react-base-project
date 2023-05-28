import React from 'react';

/**
 * Component này dùng để chia bố cục cho trang quản trị, chỉ được sử dụng khi đăng nhập đúng tài khoản của hệ thống
 * @param {ReactElement} children Các components bên trong của component này
 * @param {String} tabTitle Tên hiển thị trên thanh tab của trình duyệt
 * @returns undefinded
 */
const MainLayout = ({ children, tabTitle }) => {
  document.title = `${tabTitle || 'Dashboard'} | Demo dashboard app`;
  return (
    <div>
      {children}
    </div>
  );
};

export default MainLayout;