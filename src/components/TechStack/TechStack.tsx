import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";

const TechStack = () => {
  return (
    <Wrapper className="py-8">
      <div className="mb-16">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-[#eaeaea] font-semibold md:text-5xl text-4xl mb-3">
            My Tech Stack
          </h3>
          <p className="text-[#7e7e7e] md:text-2xl text-lg text-center">
            {" "}
            Technologies I’ve been working with recently
          </p>
        </div>
      </div>
      <div className="Container">
        <div className="grid gap-20 md:grid-cols-7 grid-cols-3">
          <Image
            src="/techstack/1.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/2.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/3.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/4.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/5.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/6.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/7.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/8.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/9.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/10.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/11.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/12.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/13.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />

          <Image
            src="/techstack/14.svg"
            width={800}
            height={800}
            alt="icon1"
            className=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default TechStack;
