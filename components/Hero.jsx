'use client'

import AnimatedButton from "@components/AnimatedButton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "@components/Button";
import animationData from '@lottie/system-outline-19-book.json';
import { useEffect } from "react";

const Hero = () => {

  useEffect (() => {
    AOS.init();
  })
  
  return (
    <section className="overflow-hidden px-5% font-main pt-10 lg:pt-20 pb-20">
      <div className="mx-auto max-w-7xl   ">
        <div className="grid grid-rows-auto gap-24 lg:grid-cols-2">
          <div
            className="w-full  h-auto relative flex flex-col justify-center"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] lg:text-[61px] md:text-[58px] md:leading-[1.233] font-bold">
              The ultimate finance  campus
            </h1>
            <p className=" text-lg text-textgray">
              Eiusmod nisi enim minim dolore fugiat cillum tempor officia aliqua
              aliqua. Elit dolore do exercitation officia adipisicing duis irure
              laborum eiusmod Lorem fugiat cillum.{" "}
            </p>
            <div className="md:mt-20 mt-14 flex flex-col text-center  md:flex-row gap-5 md:gap-3 ">
              <Button text="Get Free Consultation" />
              <AnimatedButton
                text="View Courses"
                
                animationData = {animationData}
              />
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute hidden lg:block -top-20 right-1/2 w-36 h-36 -z-10"
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="800"
            >
              <svg
                width="309"
                height="309"
                viewBox="0 0 309 309"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M308.506 154.253C308.506 239.445 239.445 308.506 154.253 308.506C69.0615 308.506 0 239.445 0 154.253C0 69.0615 69.0615 0 154.253 0C239.445 0 308.506 69.0615 308.506 154.253ZM49.2478 154.253C49.2478 212.246 96.2602 259.258 154.253 259.258C212.246 259.258 259.258 212.246 259.258 154.253C259.258 96.2602 212.246 49.2478 154.253 49.2478C96.2602 49.2478 49.2478 96.2602 49.2478 154.253Z"
                  fill="#2e328d"
                />
              </svg>
            </div>
            <div
              className="absolute -top-2 lg:top-auto lg:-bottom-4 -left-4 lg:-left-10 w-36 h-36 -z-10 "
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="800"
              data-aos-offset="-200"
            >
              <svg
                width="162"
                height="162"
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
              src='/assets/hero.jpeg'
              alt="Image of a student holding laptop"
              data-aos="zoom-out"
              data-aos-duration="600"
              data-aos-delay="500"
            />
            <div
              className="absolute top-36 -right-6 lg:-right-8 w-36 h-36 -z-10 "
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="800"
            >
              <svg
                width="162"
                height="162"
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
        </div>

        <div
          className="mt-32 w-full lg:flex hidden  justify-center  items-center gap-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="max-w-[100px] flex">
            <img className="flex-custom" src='/assets/ca.png' />
          </div>
          <div className="max-w-[100px] flex">
            <img className="flex-custom" src='/assets/cma.png' />
          </div>
          <div className="max-w-[100px] flex">
            <img className="flex-custom" src='/assets/cs.jpg'/>
          </div>
          <div className="max-w-[100px] flex">
            <img className="flex-custom" src='/assets/ifrs.png'/>
          </div>
          <div className="max-w-[100px] flex">
            <img className="flex-custom" src='/assets/catlam.png' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
