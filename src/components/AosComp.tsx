"use client";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const AosComp = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return null;
};

export default AosComp;
