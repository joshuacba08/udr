import React from 'react';
import IconBase from './IconBase';
import type { IconProps } from './IconBase';

const LuggageIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 11 11"
      defaultWidth={11}
      defaultHeight={11}
    >
      <path d="M8.01204 9.4334H2.33537C1.86014 9.4334 1.46871 9.0419 1.46871 8.56667V4.0167C1.46871 3.54147 1.86014 3.14997 2.33537 3.14997H8.01204C8.48727 3.14997 8.8787 3.54147 8.8787 4.0167V8.56667C8.8787 9.0419 8.48727 9.4334 8.01204 9.4334ZM3.6687 3.14997V2.28333C3.6687 1.82203 4.04073 1.44997 4.5 1.44997H5.8 5.8C6.2612 1.44997 6.6334 1.82203 6.6334 2.28333V3.14997M3.6687 6.2334V6.2334M6.6334 6.2334V6.2334M8.01204 9.4334Z" stroke="#9B9FB7" strokeWidth="1.3416" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  );
};

export default LuggageIcon;
