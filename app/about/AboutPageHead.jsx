import React from "react";
import Button from "@components/Button";
import AnimatedButton from "@components/AnimatedButton";
import animationData from "@lottie/system-outline-19-book.json";

const AboutPageHead = () => {
  return (
    <section className="oveflow-hidden font-main relative px-5% pt-5 md:pt-10 lg:pt-20 pb-20 lg:pb-32">
      <div className="mx-auto max-w-7xl ">
        <div className="flex lg:flex-row flex-col relative justify-between items-center">
          <div
            className="relative  flex max-w-2xl mr-9 justify-center items-center"
            
          >
            <img className="relative z-10" src="/assets/hero.jpeg" data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-delay="100" />
            <div
              className="absolute  lg:-top-2 left- lg:left-8 w-36 h-36 z-0 "
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="-200"
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
          </div>
          <div
            className="relative z-10 max-w-[43%] min-w-[438px]"
            data-aos="zoom-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] lg:text-[61px] md:text-[58px] md:leading-[1.233] font-bold">
              About us
            </h1>
            <p className=" text-lg  text-textgray mb-10 ">
              Eiusmod nisi enim minim dolore fugiat cillum tempor officia aliqua
              aliqua. Elit dolore do exercitation officia adipisicing duis irure
              laborum eiusmod Lorem fugiat cillum.
            </p>
            <div className="mb-3 grid grid-cols-1  gap-4 ">
              <div className="flex gap-4 items-center text-blackbg leading-[1.1]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={13} cy={13} r="13" fill="#2e328d" />
                  <path
                    d="M19.5 8.66666L10.8334 17.3333L6.50003 13"
                    stroke="white"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className="text-lg font-medium">
                  15+ years of experience
                </div>
              </div>
            </div>
            <div className="mb-12 grid grid-cols-1  gap-4 ">
              <div className="flex gap-4 items-center text-blackbg leading-[1.1]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={13} cy={13} r="13" fill="#2e328d" />
                  <path
                    d="M19.5 8.66666L10.8334 17.3333L6.50003 13"
                    stroke="white"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className="text-lg font-medium">10+ Experts to teach</div>
              </div>
              <div className="mb-3 grid grid-cols-1  gap-4 ">
                <div className="flex gap-4 items-center text-blackbg leading-[1.1]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={13} cy={13} r="13" fill="#2e328d" />
                    <path
                      d="M19.5 8.66666L10.8334 17.3333L6.50003 13"
                      stroke="white"
                      stroke-miterlimit="10"
                    />
                  </svg>
                  <div className="text-lg font-medium">
                    Teached over 255+ students{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col text-center  md:flex-row gap-5 md:gap-3 ">
              <Button text="Get Free Consultation" />
              <AnimatedButton
                text="View Courses"
                animationData={animationData}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHead;
