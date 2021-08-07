import React from "react";

interface MainWrapperProps {}

const MainWrapper: React.FC<MainWrapperProps> = (props) => {
  return <div className="wrapper__main">{props.children}</div>;
};

export default MainWrapper;
