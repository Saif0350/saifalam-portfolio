import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import TechStack from "@/components/TechStack/TechStack";
import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="z-10">
        <Wrapper>
          <Hero />
          <About />
          <Services />
          <TechStack />
        </Wrapper>

        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
