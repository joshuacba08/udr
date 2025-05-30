import React from 'react';
import IconBase from './IconBase';
import type { IconProps } from './IconBase';

const TransmissionIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 11 11"
      defaultWidth={11}
      defaultHeight={11}
    >
      <path d="M5.67745 9.50167V1.49833M1.67578 5.5H9.67912V1.49833M1.67578 9.50167V1.49833" stroke="#9B9FB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </IconBase>
  );
};

export default TransmissionIcon;
