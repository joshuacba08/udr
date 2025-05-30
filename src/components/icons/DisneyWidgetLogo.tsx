import React from 'react';
import IconBase from './IconBase';
import type { IconProps } from './IconBase';

const DisneyWidgetLogo: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 15 13"
      defaultWidth={15}
      defaultHeight={13}
    >
      <path d="M11 1.34961C12.4636 1.34961 13.6504 2.53645 13.6504 4C13.6504 5.27529 12.7489 6.33894 11.5488 6.5918C11.6141 6.88419 11.6504 7.18792 11.6504 7.5C11.6504 9.79198 9.79198 11.6504 7.5 11.6504C5.20802 11.6504 3.34961 9.79198 3.34961 7.5C3.34961 7.18799 3.38492 6.88413 3.4502 6.5918C2.2506 6.33858 1.34961 5.27496 1.34961 4C1.34961 2.53645 2.53645 1.34961 4 1.34961C5.27496 1.34961 6.33858 2.2506 6.5918 3.4502C6.88413 3.38492 7.18799 3.34961 7.5 3.34961C7.81168 3.34961 8.11518 3.38506 8.40723 3.4502C8.66036 2.2505 9.72497 1.34961 11 1.34961Z" stroke="#C8CED9" strokeWidth="1.3"/>
    </IconBase>
  );
};

export default DisneyWidgetLogo;
