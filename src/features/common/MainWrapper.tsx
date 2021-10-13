import React from "react";

interface MainWrapperProps {}

const MainWrapper: React.FC<MainWrapperProps> = (props) => {
  return (
    <div className="wrapper__main">
      {props.children}
      <br></br>
    </div>
  );
};

export default MainWrapper;
