import React from 'react';
import { ReactComponent as Filled } from './filled.svg';

import { IconProps } from '../../../types';
const CarFilled = ({ color = '#000', size = 12, ...props }: IconProps) => {
  return (
    <Filled
      //   style={{ width: size, height: size, fill: color, stroke: 'transparent' }}
      fill={color}
      width={size}
      height={size}
      stroke="transparent"
      {...props}
    />
  );
};
export { CarFilled };
