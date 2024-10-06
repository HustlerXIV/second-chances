import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <div className="w-full max-w-[1200px] px-5 mx-auto" style={style}>
      {children}
    </div>
  );
};

export default Container;
