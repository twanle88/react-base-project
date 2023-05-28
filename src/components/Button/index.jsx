import { Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Toàn bộ props mà Button antd cung cấp
 * Ngoài ra thì có thể dùng các element bên trong thay cho title
 * @returns Component
 */
const ButtonComponent = ({ loading: loadingBtn, ...props }) => (
  <Button
    {...props}
    style={{ ...props?.style }}
  >
    {props.children || props.title || ''}
    {console.log(loadingBtn)}
  </Button>
);
ButtonComponent.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.element,
};
ButtonComponent.defaultProps = {
  loading: false,
  children: '',
};

export default ButtonComponent;