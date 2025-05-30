import React from "react";
import type { IconProps } from "./IconBase";
import IconBase from "./IconBase";

const TransmissionIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 11 11"
      defaultWidth={11}
      defaultHeight={11}
    >
      <path
        d="M5.67745 9.50167V1.49833M1.67578 5.5H9.67912V1.49833M1.67578 9.50167V1.49833"
        stroke="#9B9FB7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

export default TransmissionIcon;
