import React from "react";

type optionProp = {
  name: string;
  id: number;
  email?: string;
};
const OptionalPro = (props: optionProp) => {
  return <div>{props.name}</div>;
};

export default OptionalPro;
