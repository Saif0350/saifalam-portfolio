"use client";
import {
  ChartNoAxesCombined,
  MousePointerClick,
  ShoppingCart,
  Zap,
} from "lucide-react";
import React from "react";
import Image from "next/image";

const DevelopmentHero = () => {
  return (
    <div className="stContainer relative pt-32 space-y-6 pb-10 text-center">
      {/* Top Badge with Shiny Border */}
      <div className="relative inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[13px] font-medium tracking-wide overflow-hidden">
        {/* Animated Border */}
        <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-stRed via-stRed/25 to-stRed animate-border">
          <span className="block w-full h-full rounded-full bg-white"></span>
        </span>

        {/* Content */}
        <Zap
          size={14}
          strokeWidth={1.5}
          className="relative z-10 text-pink-600"
        />
        <p className="relative z-10 text-gray-800">We make business profit</p>
      </div>

      {/* HEADING */}
      <div>
        <h1 className="text-[39px] lg:text-[64px] relative text-[#242424] leading-[1.05] tracking-tighter max-w-[550px] font-normal mx-auto">
          Get the Website you Want for{" "}
          <span className="relative inline-block">
            Growth
            {/* Underline Curve */}
            <svg
              className="absolute left-0 w-full h-4 bottom-0"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M5 15 Q 50 25 95 15"
                stroke="#ff0808"
                strokeWidth="2"
                fill="transparent"
                className="animate-draw"
              />
            </svg>
          </span>
          <ChartNoAxesCombined
            className="inline animate-pulse absolute top-[40px] lg:top-[80px] right-0"
            size={45}
            color="#088408"
            strokeWidth={0.75}
          />
        </h1>
      </div>

      {/* FLOATING ICONS */}
      <div className="absolute top-[80%] lg:top-[30%] left-[15%]">
        <Image
          src={"/assets/icons/paperplane.png"}
          alt=""
          height={100}
          width={200}
          className="h-14 w-auto "
        />
      </div>
      <div className="absolute top-[80%] lg:top-[70%] left-[10%]">
        <ShoppingCart size={45} strokeWidth={0.25} className="-rotate-6" />
      </div>
      <div className="absolute top-[17%] lg:top-[40%] right-[10%] lg:right-[15%]">
        <MousePointerClick size={45} strokeWidth={0.25} className="-rotate-6" />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        /* SVG Draw */
        .animate-draw {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: draw 4s ease forwards infinite alternate;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Shiny Border */
        .animate-border {
          background-size: 200% 200%;
          animation: borderMove 3s linear infinite;
        }
        @keyframes borderMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default DevelopmentHero;
