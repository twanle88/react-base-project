/* eslint-disable max-len */
import React from 'react';
import Spinner from './Spinner';

const SpinnerLoader = ({ size = '24px', wrapperClassName = '' }) => (
  <div className={`backdrop-blur-sm absolute w-full h-full flex items-center justify-center top-0 left-0 z-[9999] ${wrapperClassName}`}>
    <Spinner size={size} />
  </div>
);

export default SpinnerLoader;
