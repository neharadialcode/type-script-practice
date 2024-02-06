import React from "react";

type person = {
  person: {
    name: string;
    email: string;
    id: number;
  };
};
const Object1 = (props: person) => {
  return (
    <div>
      <h1>{props.person.name}</h1>
      <h1>{props.person.email}</h1>
      <h1>{props.person.id}</h1>
    </div>
  );
};

export default Object1;
