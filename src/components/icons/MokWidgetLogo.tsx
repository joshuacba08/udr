import React from 'react';
import IconBase from './IconBase';
import type { IconProps } from './IconBase';

const MokWidgetLogo: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 12 13"
      defaultWidth={12}
      defaultHeight={13}
    >
      <path d="M8.03125 5.2118L5.6875 7.55555L4.28125 6.1493M11 5.87243C11 8.71055 8.86687 11.3643 6 12.0087C3.13313 11.3643 1 8.71055 1 5.87243V3.64305C1 3.13555 1.30688 2.67805 1.77688 2.48618L4.90188 1.20743C5.60563 0.919302 6.39437 0.919302 7.09812 1.20743L10.2231 2.48618C10.6931 2.67868 11 3.13555 11 3.64305V5.87243Z" stroke="#C8CED9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconBase>
  );
};

export default MokWidgetLogo;
