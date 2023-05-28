import { Input } from 'antd';
import React, { useState } from 'react';
import { t } from 'i18next';

// cần custom lại component này để có thể sử dụng vơi Form antd và dùng với trường hợp khác
const NumberInput = (props) => {
  const {
    value,
    onChange,
    showError,
  } = props;
  const [errorMessage, setErrorMessage] = useState('');

  const change = (e) => {
    setErrorMessage(e.target.value.length >= 15 ? t('alert.MAXLENGTH_PHONE_NUMBER') : '');

    onChange(e);
  };
  return (
    <div>
      <Input
        {...props}
        onChange={change}
        value={value}
        type="number"
        onKeyDown={(e) => {
          if (!/[0-9]|[Backspace,Left,Right,Up,Down,Tab]|[.]$/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
      {errorMessage && showError ? <div className="ant-form-item-explain-error">{errorMessage}</div> : ''}
    </div>
  );
};

export default NumberInput;
