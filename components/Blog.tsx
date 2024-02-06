import React from "react";

type value = {
  icon: any;
  text: string;
};
const Blog = (value: value) => {
  return (
    <div>
      {value.icon} <p>{value.text}</p>
    </div>
  );
};

export default Blog;
