import React from "react";

interface ContainerProps {}

const Container: React.FC<ContainerProps> = (props) => {
  return <div className=" wrapper__section">{props.children}</div>;
};

export default Container;
