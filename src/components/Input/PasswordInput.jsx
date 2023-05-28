import { Input } from 'antd';
import React, { useState, useEffect } from 'react';

// cần custom lại component này để có thể sử dụng vơi Form antd và dùng với trường hợp khác
const PasswordInput = (props) => {
  const {
    type,
    placeholder,
    disabled,
    className,
    value,
    onChange,
    name,
    err,
  } = props;
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage(err);
  }, [err]);

  // const validate = (data) => {
  //   if (isinit) { return; }
  //   const errorText = validatePassword(data);
  //   setErrorMessage(errorText);
  // };

  return (
    <div>
      <div>
        <Input
          {...props}
          type={type || 'text'}
          value={value || ''}
          name={name || ''}
          placeholder={placeholder}
          disabled={disabled || false}
          className={className || ''}
          onChange={(e) => {
            // validate(e.target.value);
            onChange(e);
          }}
        />
      </div>
      {errorMessage ? <span className="text-[#ff4d4f] text-xs">{errorMessage}</span> : ''}
    </div>

  );
};

export default PasswordInput;
