import React from "react";
import { FC, ReactNode } from "react";

const About: FC<{ icon: any; text: string }> = ({ icon, text }) => {
  return (
    <div>
      {icon} <p>{text}</p>
    </div>
  );
};

export default About;
