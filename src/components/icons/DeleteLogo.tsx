import React from 'react';
import IconBase from './IconBase';
import type { IconProps } from './IconBase';

const DeleteLogo: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 16 18"
      defaultWidth={16}
      defaultHeight={18}
    >
      <path d="M14.4 4.1H1.6M6.4 1H9.6M2.4 4.1L3.2 16.9H12.8L13.6 4.1M6.4 7.3V13.7M9.6 7.3V13.7M10.4 13.7V7.3M5.6 13.7V7.3M9.9 12.5V6.89999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  );
};

export default DeleteLogo;
