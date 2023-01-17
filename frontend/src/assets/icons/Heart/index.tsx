import React from 'react';
import { ReactComponent as Filled } from './filled.svg';

import { IconProps } from '../../../types';
const HeartOutlined = ({ color = '#000', size = 12, ...props }: IconProps) => {
  return <Filled style={{ width: size, height: size, stroke: color, fill: 'transparent' }} {...props} />;
};
const HeartFilled = ({ color = '#000', size = 12, ...props }: IconProps) => {
  return (
    <Filled
      style={{ width: size, height: size, fill: color, stroke: 'transparent' }}
      fill={color}
      width={size}
      height={size}
      {...props}
    />
  );
};
export { HeartOutlined, HeartFilled };
