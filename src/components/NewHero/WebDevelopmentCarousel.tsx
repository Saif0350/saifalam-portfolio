import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import ScaleEmbla from "./ScaleEmbla";

const OPTIONS: EmblaOptionsType = { loop: true };

const WebDevelopmentCarousel = () => {
  const data = [
    {
      image:
        "https://cdn.prod.website-files.com/67fbf7c5cc41cb226348d97c/6849a577b0669053324b1d5f_ezgif.com-optimize.gif",
      title: "Static Website",
      description:
        "We build responsive, user-friendly websites that drive engagement and conversions.",
      link: "/static-website-development-company-in-mumbai",
    },
    {
      image:
        "https://cdn.prod.website-files.com/67fbf7c5cc41cb226348d97c/6849990e98ef0f1b3aad0f92_softr.avif",
      title: "Ecommerce Development",
      description:
        "We build responsive, user-friendly websites that drive engagement and conversions.",
      link: "/ecommerce-website-development-company-in-mumbai",
    },
    {
      image:
        "https://cdn.prod.website-files.com/67fbf7c5cc41cb226348d97c/68499847fd9cfad46bc95aaf_file.avif",
      title: "Dynamic Website",
      description:
        "We build responsive, user-friendly websites that drive engagement and conversions.",
      link: "/dynamic-website-development-company-in-mumbai",
    },
    {
      image:
        "https://cdn.prod.website-files.com/67fbf7c5cc41cb226348d97c/6849a577b0669053324b1d5f_ezgif.com-optimize.gif",
      title: "Static Website",
      description:
        "We build responsive, user-friendly websites that drive engagement and conversions.",
      link: "/web-development-company-in-mumbai",
    },
    {
      image:
        "https://cdn.prod.website-files.com/67fbf7c5cc41cb226348d97c/6849937249192440feb7e3fd_paddle.avif",
      title: "Blog Website",
      description:
        "We build responsive, user-friendly websites that drive engagement and conversions.",
      link: "/web-development-company-in-mumbai",
    },
  ];
  return (
    <div className="px-4 md:px-10 lg:px-16 py-6 md:py-10">
      <ScaleEmbla slides={data} options={OPTIONS} />
    </div>
  );
};

export default WebDevelopmentCarousel;
