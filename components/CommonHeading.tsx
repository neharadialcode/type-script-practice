import React from "react";
type Heading = {
  children: React.ReactNode;
};
const CommonHeading = (props: Heading) => {
  return <div className="h-[300px] bg-purple-400">{props.children}</div>;
};

export default CommonHeading;
