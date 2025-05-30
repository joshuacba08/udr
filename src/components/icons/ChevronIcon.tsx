import React from "react";
import type { IconProps } from "./IconBase";
import IconBase from "./IconBase";

interface ChevronIconProps extends IconProps {
  direction?: "up" | "down" | "left" | "right";
}

const ChevronIcon: React.FC<ChevronIconProps> = ({
  direction = "down",
  ...props
}) => {
  const getRotation = () => {
    switch (direction) {
      case "up":
        return "rotate-180";
      case "left":
        return "rotate-90";
      case "right":
        return "-rotate-90";
      default:
        return "";
    }
  };

  return (
    <IconBase
      {...props}
      viewBox="0 0 20 20"
      defaultWidth={20}
      defaultHeight={20}
      className={`${getRotation()} ${props.className || ""}`}
    >
      <path
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ChevronIcon;
