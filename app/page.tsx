import About from "@/components/About";
import ArrObj from "@/components/ArrObj";
import Blog from "@/components/Blog";
import CommonHeading from "@/components/CommonHeading";
import Hero from "@/components/Hero";
import { HomeIcon } from "@/components/Icons";
import Object1 from "@/components/Object1";
import OptionalPro from "@/components/OptionalPro";
import Status from "@/components/Status";

export default function Home() {
  const person = {
    name: "Neha",
    email: "neha@gmail.com",
    id: 4,
  };
  const abc = [
    {
      name: "Neha",
      id: 1,
    },
    {
      name: "Neha11",
      id: 2,
    },
    {
      name: "Neha22",
      id: 3,
    },
    {
      name: "Neha33",
      id: 4,
    },
  ];
  return (
    <>
      <Hero icon={<HomeIcon />} text="hello" />
      <About icon={<HomeIcon />} text="world" />
      <Blog icon={<HomeIcon />} text="blog" />
      <Object1 person={person} />
      <ArrObj abc={abc} />
      <Status status="loading" />
      <CommonHeading>hello</CommonHeading>
      <OptionalPro name="name" id={1} />
    </>
  );
}
