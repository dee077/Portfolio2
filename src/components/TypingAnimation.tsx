import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Software Developer", 2000,
        "GSoC 25 @ OpenWISP", 2000,
        "Open Source Contributor", 2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="hero-gradient text-3xl md:text-6xl font-bold"
    />
  );
};

export default TypingAnimation;