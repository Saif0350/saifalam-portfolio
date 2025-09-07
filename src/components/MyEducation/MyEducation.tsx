import React from "react";
import "./myeducation.css";
import { educationDetails } from "@/lib/myeducation";

const MyEducation = () => {
  return (
    <div className="page-wrapper ">
      <div className="section-timeline-heading">
        <div className="container">
          <div className="w-full lg:w-1/3">
            <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
              Education Timeline
            </h6>
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
              My Academic{" "}
              <span className="bg-themeGradient bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="section-timeline">
        <div className="container">
          <div className="timeline_component">
            <div className="timeline_progress">
              <div className="timeline_progress-bar"></div>
            </div>
            {educationDetails.map((step, index) => (
              <div key={index} className="timeline_item">
                <div className="timeline_left">
                  {/* <h3 className="text-white text-3xl font-semibold tracking-wider timeline_date-text">
                    Step {step.stepNumber}
                  </h3> */}
                </div>
                <div className="timeline_centre">
                  <div className="timeline_circle"></div>
                </div>
                <div className="timeline_right">
                  <div className="margin-bottom-xlarge space-y-4">
                    <h2 className="gradientHeading font-semibold tracking-wider capitalize text-2xl lg:text-4xl">
                      {step.title}
                    </h2>
                    {step.details.map((detail, i) => (
                      <p
                        key={i}
                        className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]"
                      >
                        <span className="text-lightGolden font-medium underline">
                          {detail.heading}
                        </span>{" "}
                        {detail.description}
                      </p>
                    ))}
                  </div>
                  {/* <div className="timeline_image-wrapper">
                    <Image src={step.image} height={300} width={600} alt="" />
                  </div> */}
                </div>
              </div>
            ))}
            <div className="overlay-fade-top"></div>
            <div className="overlay-fade-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
