"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./myeducation.css";
import { educationDetails } from "@/lib/myeducation";

const MyEducation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const totalSteps = educationDetails.length;
  const currentEducation = educationDetails[activeStep];

  const goToStep = (index: number) => {
    if (index < 0 || index >= totalSteps || index === activeStep) {
      return;
    }

    setDirection(index > activeStep ? 1 : -1);
    setActiveStep(index);

    // Reset scroll when changing education
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      y: shouldReduceMotion ? 0 : direction > 0 ? 30 : -30,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    }),

    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },

    exit: (direction: number) => ({
      opacity: 0,
      y: shouldReduceMotion ? 0 : direction > 0 ? -30 : 30,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    }),
  };

  return (
    <section
      id="education"
      className="education-section container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5"
    >
      {/* Heading */}
      <div className="section-timeline-heading">
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

      {/* Education Card */}
      <div className="education-card ">
        {/* Progress Indicators */}
        <div className="education-progress">
          {educationDetails.map((step, index) => (
            <button
              key={step.stepNumber}
              type="button"
              onClick={() => goToStep(index)}
              aria-label={`Go to ${step.title}`}
              aria-current={index === activeStep ? "step" : undefined}
              className={`education-progress-bar ${
                index <= activeStep ? "active" : ""
              }`}
            />
          ))}
        </div>

        {/* Step Counter */}
        <div className="education-step">
          STEP {String(activeStep + 1).padStart(2, "0")} /{" "}
          {String(totalSteps).padStart(2, "0")}
        </div>

        {/* Animated Content */}
        <div className="education-animation-container">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentEducation.stepNumber}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                ease: "easeInOut",
              }}
              className="education-slide"
            >
              {/* Scrollable content */}
              <div
                ref={scrollRef}
                className="education-slide-scroll"
                tabIndex={0}
                aria-label={`${currentEducation.title} details`}
              >
                <h3 className="gradientHeading font-outfit font-semibold text-2xl md:text-4xl mb-7">
                  {currentEducation.title}
                </h3>

                <div className="education-details">
                  {currentEducation.details.map((detail, index) => (
                    <motion.div
                      key={`${currentEducation.stepNumber}-${index}`}
                      initial={{
                        opacity: shouldReduceMotion ? 1 : 0,
                        y: shouldReduceMotion ? 0 : 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : 0.12 + index * 0.07,
                        duration: shouldReduceMotion ? 0 : 0.3,
                      }}
                      className="education-detail"
                    >
                      <span className="education-detail-heading">
                        {detail.heading}
                      </span>

                      <p>{detail.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="education-navigation">
          <button
            type="button"
            onClick={() => goToStep(activeStep - 1)}
            disabled={activeStep === 0}
            className="education-nav-btn previous"
          >
            <span aria-hidden="true">←</span>
            Previous
          </button>

          <button
            type="button"
            onClick={() => goToStep(activeStep + 1)}
            disabled={activeStep === totalSteps - 1}
            className="education-nav-btn next"
          >
            Next
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Scroll Hint */}
      <p className="education-hint">
        Scroll inside the card to read more, or use the buttons to explore my
        academic journey.
      </p>
    </section>
  );
};

export default MyEducation;
