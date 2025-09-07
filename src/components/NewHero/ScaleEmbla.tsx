"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { NextButton, PrevButton, usePrevNextButtons } from "./ScaleArrow";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { DotButton, useDotButton } from "./ScaleButton";

const TWEEN_FACTOR_BASE = 0.15;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type Slide = {
  image: string;
  title: string;
  link: string;
};

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const ScaleEmbla: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="w-full space-y-6">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y ml-[-1rem]">
          {slides.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_70%] lg:flex-[0_0_55%] min-w-0 pl-4 py-2 translate-z-0"
            >
              <div className="embla__slide__number space-y-4 relative border border-gray-300 p-2 lg:p-3 bg-gray-100 rounded-3xl backface-hidden">
                <div className="aspect-[19/14]  overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt=""
                    height={1000}
                    width={1500}
                    className="h-full w-full object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="px-2 flex items-center justify-between pb-1">
                  <h3 className="lg:text-lg font-light -tracking-[0.015em]">
                    {item.title}
                  </h3>
                  <Link
                    href={item.link}
                    className="text-[13px] text-gray-700 flex items-center gap-2 tracking-wide"
                  >
                    View details
                    <MoveRight size={20} strokeWidth={0.9} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`h-1 w-6 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-red-600 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center justify-center gap-3">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default ScaleEmbla;
