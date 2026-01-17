import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  style,
  ...props
}) => (
  <div
    className={`bg-gray-200 animate-pulse rounded ${className}`}
    style={style}
    {...props}
  />
);

export default Skeleton;
