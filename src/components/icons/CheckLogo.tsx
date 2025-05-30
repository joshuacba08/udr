import React from "react";
import type { IconProps } from "./IconBase";
import IconBase from "./IconBase";

const CheckLogo: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} viewBox="0 0 9 7" defaultWidth={9} defaultHeight={7}>
      <path
        d="M7.66667 1.5L3.42424 5.5L1 3.21429"
        stroke="#26B489"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

export default CheckLogo;
