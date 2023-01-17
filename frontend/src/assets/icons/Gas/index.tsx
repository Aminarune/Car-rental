import React from 'react';
import { ReactComponent as Outlined } from './outlined.svg';
import { ReactComponent as Filled } from './filled.svg';
import { ReactComponent as TwoTone } from './twotone.svg';
import { ReactComponent as Bulk } from './bulk.svg';
import { ReactComponent as Broken } from './broken.svg';
import { IconProps } from '../../../types';
const GasOutlined = ({ color = '#000', size = 12, ...props }: IconProps) => {
  return <Outlined style={{ width: size, height: size, stroke: color, fill: 'transparent' }} {...props} />;
};
const GasFilled = ({ color = '#000', size = 12, ...props }: IconProps) => {
  return (
    <Filled
      style={{ width: size, height: size, fill: color, stroke: 'transparent' }}
      // fill={color}
      // width={size}
      // height={size}
      {...props}
    />
  );
};
const GasTwoTone = ({ color = '#000', size = 12, ...props }: IconProps) => {
  return <TwoTone style={{ width: size, height: size, stroke: color, fill: 'transparent' }} {...props} />;
};
const GasBulk = ({ color = '#000', size = 12, ...props }: IconProps) => {
  return <Bulk style={{ width: size, height: size, fill: color, stroke: 'transparent' }} {...props} />;
};
const GasBroken = ({ color = '#000', size = 12, ...props }: IconProps) => {
  return <Broken style={{ width: size, height: size, stroke: color, fill: 'transparent' }} {...props} />;
};
export { GasOutlined, GasFilled, GasTwoTone, GasBulk, GasBroken };
