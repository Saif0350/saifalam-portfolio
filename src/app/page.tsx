import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import MyEducation from "@/components/MyEducation/MyEducation";
import MyProjectsComp from "@/components/MyProjectsComp/MyProjectsComp";
import Awards from "@/components/NewComp/NewComp";
import DevelopmentHero from "@/components/NewHero/DevelopmentHero";
import WebDevelopmentCarousel from "@/components/NewHero/WebDevelopmentCarousel";
import Services from "@/components/Services/Services";
import TechStack from "@/components/TechStack/TechStack";
import Wrapper from "@/components/Wrapper/Wrapper";

export default function Home() {
  return (
    <>
      <div className="z-10">
        {/* <Background /> */}

        {/* <div
          className=""
          style={{
            backgroundImage: "url('/assets/background/whitebg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <DevelopmentHero />
          <WebDevelopmentCarousel />
        </div> */}
        <Wrapper>
          <Hero />
          <About />
          <Services />
          <MyEducation />
          {/* <MyProjectsComp /> */}
          <TechStack />
          <Awards />
        </Wrapper>

        {/* <Portfolio /> */}
        <Contact />
      </div>
    </>
  );
}
