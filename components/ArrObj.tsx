import React from "react";

type namesArr = {
  abc: {
    name: string;
    id: number;
  }[];
};
const ArrObj = (props: namesArr) => {
  return (
    <div>
      {props.abc.map((obj, i) => (
        <h1>{obj.name}</h1>
      ))}
    </div>
  );
};

export default ArrObj;
