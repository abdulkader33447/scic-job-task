import React from "react";
import heroImg from "../../../../public/assets/hero-img.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-12/12 mx-auto sm:h-[500px] h-[200px] relative">
      <Image
        src={heroImg}
        alt="hero section img"
        fill
        className="object-cover rounded-lg"
        priority
      />
    </div>
  );
};

export default HeroSection;
