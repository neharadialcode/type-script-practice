import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import { HomeIcon } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Hero icon={<HomeIcon />} text="hello" />
      <About icon={<HomeIcon />} text="world" />
      <Blog icon={<HomeIcon />} text="blog" />
    </>
  );
}
