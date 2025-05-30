import React from 'react';
import IconBase from './IconBase';
import type { IconProps } from './IconBase';

const CheckLogo: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 9 7"
      defaultWidth={9}
      defaultHeight={7}
    >
      <path d="M7.66667 1.5L3.42424 5.5L1 3.21429" stroke="#26B489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </IconBase>
  );
};

export default CheckLogo;
