"use client";

import React from "react";
import { Tab } from "@headlessui/react";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const AboutCourse = ({ courseDetails }) => {
  return (
    <section className=" font-main pb-16 pt-14 lg:pb-32 px-5% lg:pt-40 bg-[#fbfbfb]">
      <div className="mx-auto max-w-full lg:max-w-7xl ">
        <div className="max-w-3xl">
          <Tab.Group>
            <Tab.List className={"mb-16 flex max-w-md"}>
              <Tab
                className={({ selected }) =>
                  classNames(
                    " w-full pb-3 px-5 text-lg",
                    "ring-white ring-opacity-60 ring-offset-2  focus:outline-none ",
                    selected
                      ? "text-primary font-bold  border-b-2 border-b-primary"
                      : "text-slate-300 border-b border-b-slate-300  font-medium"
                  )
                }
              >
                About Course
              </Tab>
              <Tab
                className={({ selected }) =>
                classNames(
                    " w-full pb-3  px-5 text-lg",
                    "ring-white ring-opacity-60 ring-offset-2  focus:outline-none ",
                    selected
                      ? "text-primary font-bold border-b-2 border-b-primary"
                      : "text-slate-300 border-b border-b-slate-300 font-medium"
                  )
                }
              >
                Syllabus
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div
                  className="w-full"
                  data-aos="fade-in"
                  data-aos-duration="800"
                >
                  <h2 className="text-black mb-6  font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
                    About the course
                  </h2>
                  {courseDetails.map((course) => (
                    <div className="">
                      {course.description && (
                        <p className="text-lg text-textgray">
                          {course.description}
                        </p>
                      )}
                      {course.stages && (
                        <div className="mt-6">
                          <h3 className="mb-4  text-black text-2xl font-bold leading-snug">
                            Stages
                          </h3>
                          <ol className="list-decimal ml-7">
                            {course.stages.map((stage) => (
                              <li className="text-base mb-1 text-textgray">
                                {stage}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>Currently not available</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
