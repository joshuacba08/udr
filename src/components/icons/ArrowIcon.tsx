import React from "react";
import type { IconProps } from "./IconBase";
import IconBase from "./IconBase";

const ArrowIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 16 14"
      defaultWidth={16}
      defaultHeight={14}
    >
      <path
        d="M1.22344 7.70625C0.832812 7.31563 0.832812 6.68125 1.22344 6.29063L6.22344 1.29063C6.61406 0.900002 7.24844 0.900002 7.63906 1.29063C8.02969 1.68125 8.02969 2.31563 7.63906 2.70625L4.34219 6H13.9297C14.4828 6 14.9297 6.44688 14.9297 7C14.9297 7.55313 14.4828 8 13.9297 8H4.34531L7.63594 11.2938C8.02656 11.6844 8.02656 12.3188 7.63594 12.7094C7.24531 13.1 6.61094 13.1 6.22031 12.7094L1.22031 7.70938L1.22344 7.70625Z"
        fill="#C8CED9"
        stroke="#C8CED9"
        strokeWidth="0.6"
      />
    </IconBase>
  );
};

export default ArrowIcon;
