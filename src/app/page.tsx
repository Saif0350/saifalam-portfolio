import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import MyProjectsComp from "@/components/MyProjectsComp/MyProjectsComp";
import Awards from "@/components/NewComp/NewComp";
import Services from "@/components/Services/Services";
import TechStack from "@/components/TechStack/TechStack";
import Wrapper from "@/components/Wrapper/Wrapper";

export default function Home() {
  return (
    <>
      <div className="z-10">
        {/* <Background /> */}
        <Wrapper>
          <Hero />
          <About />
          <Services />
          <MyProjectsComp />
          <TechStack />
          <Awards />
        </Wrapper>

        {/* <Portfolio /> */}
        <Contact />
      </div>
    </>
  );
}
