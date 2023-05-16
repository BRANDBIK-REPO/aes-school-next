'use client'

import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-web";
import Link from "next/link";


const AnimatedButton = ({animationData,text}) => {
  const containerRef = useRef(null);
  const [anim, setAnim] = useState(null);

  const handleMouseEnter = () => {
    if (anim) {
      anim.play();
    }
  };

  const handleMouseLeave = () => {
    if (anim) {
      anim.stop();
    }
  };

  useEffect(() => {
    const newAnim = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationData,
    });
    setAnim(newAnim);
    return () => newAnim.destroy();
  }, []);
  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border tap-highlight-color-transparent border-slate-200 duration-200 lg:hover:text-primary flex justify-center items-center gap-3 lg:hover:border-primary px-8 py-[16px]  rounded-full text-slate-800"
      href="/courses"
    >
      
      <div>{text}</div> <div ref={containerRef} className="w-5"></div>
    </Link>
  );
};

export default AnimatedButton;
