import React from 'react';
import IconBase from './IconBase';
import type { IconProps } from './IconBase';

const AirConditioningIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 12 13"
      defaultWidth={12}
      defaultHeight={13}
    >
      <path d="M0.928711 6.5H10.9287M2.17871 4.624L3.42871 6.5L2.17871 8.376M9.67871 8.376L8.42871 6.5L9.67871 4.624M5.92871 11.5V1.5M4.05271 10.25L5.92871 9L7.80471 10.25M7.80471 2.75L5.92871 4L4.05271 2.75" stroke="#9B9FB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </IconBase>
  );
};

export default AirConditioningIcon;
