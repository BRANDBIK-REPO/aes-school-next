import React from "react";
import Link from "next/link";
import GhostButton from "./GhostButton";
import { courses } from "@constants";

const CourseGrid = () => {
  return (
    <div className="relative z-10">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="grid md:grid-cols-2 lg:grid-cols-3 relative text-center grid-flow-row mt-20 gap-5 md:gap-5 lg:gap-6"
      >
        {courses.map((course) => (
          <Link
            className="group shadow-faq lg:hover:shadow-faq-hover relative z-10 duration-200 lg:hover:-translate-y-2"
            href={`${
              course.isImportant ? `/consultation` : `/courses/${course.slug}`
            } `}
          >
            <div className="bg-white flex flex-col justify-center text-left ">
              <div className="w-full object-cover h-56">
                <img
                  className="object-cover h-full w-full "
                  loading="lazy"
                  src={`./assets/${course.id}.jpg`}
                ></img>
              </div>

              <div className="pt-8 px-6 pb-10 md:px-10 md:pb-12 lg:px-8 lg:pt-10 lg:pb-14 ">
                <h3 className="mb-4 lg:group-hover:text-primary text-black text-2xl font-bold leading-snug">
                  {course.title}
                </h3>
                <p className="text-lg text-textgray mb-8">
                  {course.shortDescription}
                </p>
                <GhostButton
                  text="View More"
                  icon={false}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        className="absolute -top-2  lg:-top-8 -right-4 lg:-right-[5.5rem] w-36 h-36 z-0 "
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="800"
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
      <div
        className="absolute top-auto lg:-bottom-[4.5rem] -left-8 lg:-left-10 w-36 h-36 z-0 "
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="800"
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
  );
};

export default CourseGrid;
