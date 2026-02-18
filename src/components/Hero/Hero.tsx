import { aboutData } from "@/lib/sitedatasaif";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageCarouselMain from "../ImageCarouselMain/ImageCarouselMain";

const Hero = () => {
  return (
    <div id="about" className="py-24 md:py-28 xl:py-32 text-center">
      {/* Name */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-outfit font-bold stroke-text">
        {aboutData.mainData.name}
      </h1>

      {/* Subtitle */}
      <h2 className="mt-6 text-lg md:text-2xl lg:text-3xl font-outfit font-medium text-white/80 tracking-wide">
        Full Stack & DevOps Engineer
      </h2>

      {/* small description (optional but premium look) */}
      <p className="mt-4 max-w-2xl mx-auto text-white/60 text-sm md:text-base">
        Building scalable web applications, cloud infrastructure and modern
        digital experiences using React, Next.js, Node.js, Docker & AWS.
      </p>

      <section className="max-w-7xl mx-auto pt-16 md:pt-10 px-8 overflow-x-hidden ">
        <div className="flex flex-row items-center justify-between pb-2 md:pb-0">
          <Link href="/about" className="flex-shrink-0">
            <Image
              src="/assets/my_image/photu.png"
              alt="About Anna"
              width={64}
              height={64}
              className="rounded-full mt-1 transition-transform duration-300 hover:scale-110"
            />
          </Link>
          {/* Center: Separator */}
          <div className="hidden md:flex flex-grow justify-center items-center">
            <div className="border-t border-gray-300 w-full"></div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <Link
              href="https://linkedin.com/in/annafilou"
              title="LinkedIn"
              target="_blank"
              className="inline-block w-8 h-8 rounded transition-transform duration-300 hover:-rotate-12"
            >
              <svg
                className="w-8 h-8 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.856 25.8613H21.7085V19.3635C21.7085 17.813 21.677 15.8197 19.549 15.8197C17.3877 15.8197 17.057 17.5068 17.057 19.2498V25.8613H12.9095V12.5H16.8925V14.32H16.945C17.5015 13.27 18.856 12.1623 20.8772 12.1623C25.0772 12.1623 25.856 14.9273 25.856 18.527V25.8613ZM8.2265 10.6712C6.893 10.6712 5.8185 9.5915 5.8185 8.2615C5.8185 6.935 6.893 5.85525 8.2265 5.85525C9.5565 5.85525 10.6345 6.935 10.6345 8.2615C10.6345 9.5915 9.55475 10.6712 8.2265 10.6712ZM10.3055 25.8613H6.1475V12.5H10.3055V25.8613ZM27.928 2H4.065C2.924 2 2 2.903 2 4.01775V27.9823C2 29.097 2.924 30 4.065 30H27.9262C29.0672 30 30 29.097 30 27.9823V4.01775C30 2.903 29.0672 2 27.9262 2H27.928Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <Link
              href="https://github.com/anna-filou?tab=repositories"
              title="GitHub"
              target="_blank"
              className="inline-block w-8 h-8 rounded transition-transform duration-300 hover:-rotate-12"
            >
              <svg
                className=" hover:text-purple-400 transition-colors duration-300 hover:scale-110"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 1C7.16463 1 0 8.08236 0 16.8192C0 23.8085 4.5845 29.7382 10.9419 31.8299C11.7415 31.9764 12.0351 31.4867 12.0351 31.0689C12.0351 30.6917 12.0201 29.4456 12.0134 28.1238C7.56213 29.0806 6.62288 26.2573 6.62288 26.2573C5.895 24.4289 4.84625 23.9425 4.84625 23.9425C3.39463 22.9608 4.95575 22.981 4.95575 22.981C6.56237 23.0925 7.40837 24.6111 7.40837 24.6111C8.8355 27.0295 11.1515 26.3304 12.0645 25.9261C12.2081 24.9038 12.6227 24.2058 13.0804 23.8108C9.5265 23.4109 5.79063 22.0544 5.79063 15.993C5.79063 14.2659 6.41563 12.8546 7.43913 11.7468C7.273 11.3484 6.72537 9.73952 7.59412 7.56045C7.59412 7.56045 8.93775 7.13531 11.9954 9.18203C13.2716 8.83153 14.6404 8.65579 16.0001 8.64974C17.3599 8.65579 18.7298 8.83141 20.0084 9.18203C23.0623 7.13544 24.404 7.56057 24.404 7.56057C25.2749 9.7394 24.727 11.3485 24.5609 11.7468C25.5867 12.8546 26.2075 14.2659 26.2075 15.993C26.2075 22.0689 22.4645 23.4067 18.9016 23.7983C19.4755 24.2892 19.9869 25.2519 19.9869 26.7278C19.9869 28.8443 19.9684 30.5479 19.9684 31.0689C19.9684 31.49 20.2564 31.9832 21.0674 31.8277C27.4213 29.7338 32 23.8062 32 16.8193C32 8.08235 24.8364 1 16.0001 1Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            {/* <Link
              href="https://bsky.app/profile/annafilou.com"
              title="Bluesky"
              target="_blank"
              className="inline-block w-8 h-8 rounded transition-transform duration-300 hover:-rotate-12"
            >
              <svg
                className=" hover:text-blue-600 transition-colors duration-300 hover:scale-110"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 14.6214C14.5507 11.8028 10.6053 6.55077 6.936 3.96143C3.42133 1.4801 2.08133 1.90943 1.20267 2.3081C0.185333 2.76543 0 4.3281 0 5.24543C0 6.16543 0.504 12.7788 0.832 13.8841C1.91867 17.5321 5.78267 18.7641 9.34267 18.3694C4.12667 19.1428 -0.506667 21.0428 5.56933 27.8068C12.2533 34.7268 14.7293 26.3228 16 22.0628C17.2707 26.3228 18.7333 34.4241 26.3107 27.8068C32 22.0628 27.8733 19.1428 22.6573 18.3694C26.2173 18.7654 30.0813 17.5321 31.168 13.8841C31.496 12.7801 32 6.1641 32 5.24677C32 4.32677 31.8147 2.76543 30.7973 2.30543C29.9187 1.9081 28.5787 1.47877 25.064 3.95877C21.3947 6.5521 17.4493 11.8041 16 14.6214Z"
                  fill="currentColor"
                />
              </svg>
            </Link> */}

            <Link
              href="https://leetcode.com/u/Saif0350/"
              title="LeetCode"
              target="_blank"
              className="inline-block w-8 h-8 rounded transition-transform duration-300 hover:-rotate-12"
            >
              <svg
                className="hover:text-yellow-500 transition-colors duration-300 hover:scale-110"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.58 6.58L24.99 12l-5.41 5.42-1.41-1.42L22.17 12l-3.99-3.99 1.4-1.43z" />
                <path d="M12.42 25.42L7.01 20l5.41-5.42 1.41 1.42L9.83 20l3.99 3.99-1.4 1.43z" />
                <path d="M13 12h6v2h-6z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <ImageCarouselMain />
      </section>
    </div>
  );
};

export default Hero;
