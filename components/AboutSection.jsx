import React from "react";
import Button from "./Button";
import AnimatedButton from "./AnimatedButton";
import AnimationJson from "@lottie/system-outline-19-book.json";

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-5% font-main pt-16 lg:pt-20 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:gap-32 place-items-center lg:grid-cols-2">
          <div className="w-full order-2 lg:order-1 relative h-auto  flex flex-col justify-center items-center">
            <div
              className="absolute z-0 -bottom-2 lg:-bottom-[4.5rem] -right-4 lg:-right-[5.5rem] w-36 h-36  "
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <svg
                width="100"
                height="100"
                viewBox="0 0 162 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.9778" cy="2.9778" r="2.9778" fill="#2e328d" />
                <circle cx="2.9778" cy="28.9334" r="2.9778" fill="#2e328d" />
                <circle cx="2.9778" cy="80.8446" r="2.9778" fill="#2e328d" />
                <circle cx="2.9778" cy="132.756" r="2.9778" fill="#2e328d" />
                <circle cx="2.9778" cy="158.711" r="2.9778" fill="#2e328d" />
                <circle cx="2.9778" cy="54.8889" r="2.9778" fill="#2e328d" />
                <circle cx="2.9778" cy="106.8" r="2.9778" fill="#2e328d" />
                <circle cx="28.9334" cy="2.9778" r="2.9778" fill="#2e328d" />
                <circle cx="28.9334" cy="28.9334" r="2.9778" fill="#2e328d" />
                <circle cx="28.9334" cy="80.8446" r="2.9778" fill="#2e328d" />
                <circle cx="28.9334" cy="132.756" r="2.9778" fill="#2e328d" />
                <circle cx="28.9334" cy="158.711" r="2.9778" fill="#2e328d" />
                <circle cx="28.9334" cy="54.8889" r="2.9778" fill="#2e328d" />
                <circle cx="28.9334" cy="106.8" r="2.9778" fill="#2e328d" />
                <circle cx="54.8889" cy="2.9778" r="2.9778" fill="#2e328d" />
                <circle cx="54.8889" cy="28.9334" r="2.9778" fill="#2e328d" />
                <circle cx="54.8889" cy="80.8446" r="2.9778" fill="#2e328d" />
                <circle cx="54.8889" cy="132.756" r="2.9778" fill="#2e328d" />
                <circle cx="54.8889" cy="158.711" r="2.9778" fill="#2e328d" />
                <circle cx="54.8889" cy="54.8889" r="2.9778" fill="#2e328d" />
                <circle cx="54.8889" cy="106.8" r="2.9778" fill="#2e328d" />
                <circle cx="80.8445" cy="2.9778" r="2.9778" fill="#2e328d" />
                <circle cx="80.8445" cy="28.9334" r="2.9778" fill="#2e328d" />
                <circle cx="80.8445" cy="80.8446" r="2.9778" fill="#2e328d" />
                <circle cx="80.8445" cy="132.756" r="2.9778" fill="#2e328d" />
                <circle cx="80.8445" cy="158.711" r="2.9778" fill="#2e328d" />
                <circle cx="80.8445" cy="54.8889" r="2.9778" fill="#2e328d" />
                <circle cx="80.8445" cy="106.8" r="2.9778" fill="#2e328d" />
                <circle cx="106.8" cy="2.9778" r="2.9778" fill="#2e328d" />
                <circle cx="106.8" cy="28.9334" r="2.9778" fill="#2e328d" />
                <circle cx="106.8" cy="80.8446" r="2.9778" fill="#2e328d" />
                <circle cx="106.8" cy="132.756" r="2.9778" fill="#2e328d" />
                <circle cx="106.8" cy="158.711" r="2.9778" fill="#2e328d" />
                <circle cx="106.8" cy="54.8889" r="2.9778" fill="#2e328d" />
                <circle cx="106.8" cy="106.8" r="2.9778" fill="#2e328d" />
                <circle cx="132.756" cy="2.9778" r="2.9778" fill="#2e328d" />
                <circle cx="132.756" cy="28.9334" r="2.9778" fill="#2e328d" />
                <circle cx="132.756" cy="80.8446" r="2.9778" fill="#2e328d" />
                <circle cx="132.756" cy="132.756" r="2.9778" fill="#2e328d" />
                <circle cx="132.756" cy="158.711" r="2.9778" fill="#2e328d" />
                <circle cx="132.756" cy="54.8889" r="2.9778" fill="#2e328d" />
                <circle cx="132.756" cy="106.8" r="2.9778" fill="#2e328d" />
                <circle cx="158.711" cy="2.9778" r="2.9778" fill="#2e328d" />
                <circle cx="158.711" cy="28.9334" r="2.9778" fill="#2e328d" />
                <circle cx="158.711" cy="80.8446" r="2.9778" fill="#2e328d" />
                <circle cx="158.711" cy="132.756" r="2.9778" fill="#2e328d" />
                <circle cx="158.711" cy="158.711" r="2.9778" fill="#2e328d" />
                <circle cx="158.711" cy="54.8889" r="2.9778" fill="#2e328d" />
                <circle cx="158.711" cy="106.8" r="2.9778" fill="#2e328d" />
              </svg>
            </div>
            <img
              src='/assets/classroom.jpg'
              alt="AE'S School of Commerce Classroom image"
              data-aos="zoom-out"
              data-aos-duration="800"
              className="z-10 "
            />
          </div>
          <div className="relative flex order-1 lg:order-2 flex-col justify-center lg:mr-5" data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="200">
            <h2 className="text-black md:text-4xl font-bold leading-tight text-[28px] lg:text-[40px]">
              About Us
            </h2>
            <p className="mt-6 text-textgray text-lg ">
              Tempor in labore pariatur enim anim exercitation duis commodo
              adipisicing irure. Tempor in labore pariatur enim anim
              exercitation duis commodo adipisicing irure. <br />
              <br /> Tempor in labore pariatur enim anim exercitation duis
              commodo adipisicing irure.
            </p>
            <div className="md:mt-20 mt-14 flex flex-col text-center  md:flex-row gap-5 md:gap-3">
              <Button text="About Us" href="/about" />
              <AnimatedButton
                text="View Courses"
                animationData={AnimationJson}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
