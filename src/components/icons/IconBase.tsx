import React from "react";

export interface IconProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface IconBaseProps extends IconProps {
  children: React.ReactNode;
  viewBox?: string;
  defaultWidth?: number;
  defaultHeight?: number;
}

const IconBase: React.FC<IconBaseProps> = ({
  children,
  size,
  width,
  height,
  rotation = 0,
  className = "",
  style = {},
  viewBox,
  defaultWidth = 24,
  defaultHeight = 24,
}) => {
  const getSize = () => {
    if (size) return { width: size, height: size };
    return {
      width: width || defaultWidth,
      height: height || defaultHeight,
    };
  };

  const { width: finalWidth, height: finalHeight } = getSize();

  const transformStyle = rotation !== 0 ? `rotate(${rotation}deg)` : undefined;

  const svgStyle: React.CSSProperties = {
    transform: transformStyle,
    ...style,
  };

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={svgStyle}
    >
      {children}
    </svg>
  );
};

export default IconBase;
