import React from "react";
import type { IconProps } from "./IconBase";
import IconBase from "./IconBase";

const FilterIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase
      {...props}
      viewBox="0 0 20 20"
      defaultWidth={20}
      defaultHeight={20}
    >
      <path
        d="M7.50005 6.5L7.49995 11M7.49995 11C6.67152 11 6 11.6716 6 12.5C6 13.3284 6.67157 14 7.5 14C8.32843 14 9 13.3284 9 12.5C9 11.6716 8.32838 11 7.49995 11ZM12.5 13.5L12.5 9M12.5 9C13.3285 9 14 8.32843 14 7.5C14 6.67157 13.3284 6 12.5 6C11.6716 6 11 6.67157 11 7.5C11 8.32843 11.6716 9 12.5 9ZM6 19H14C16.7614 19 19 16.7614 19 14V6C19 3.23858 16.7614 1 14 1H6C3.23858 1 1 3.23858 1 6V14C1 16.7614 3.23858 19 6 19Z"
        stroke="#3179BD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

export default FilterIcon;
