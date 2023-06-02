import React from "react";
import { client, urlFor } from "@lib/client";
import { ClockIcon, GraduationCapIcon } from "lucide-react";


const page = async ({ params: { slug } }) => {
  const courseDetails = await getData(slug);
  return (
    <>
      <section className="oveflow-hidden font-main relative px-5% pt-5 md:pt-10 lg:pt-20 pb-14 lg:pb-32">
        <div className="mx-auto max-w-7xl ">
          {courseDetails.map((course) => (
            <div
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="100"
              className="flex justify-between  items-center "
            >
              <div className="relative z-10 w-full max-w-full lg:max-w-2xl lg:min-w-[445px] mr-5">
                {course.fullTitle && (
                  <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] lg:text-[52px] md:text-[48px] md:leading-[1.233] font-bold">
                    {course.fullTitle}
                  </h1>
                )}
                {course.shortDescription && (
                  <p className="text-lg text-textgray">
                    {course.shortDescription}
                  </p>
                )}
                <div className="grid gap-3 mt-6  ">
                  {course.duration && (
                    <div className="flex items-center  duration-200 group box-border text-blackbg leading-none font-bold text-base gap-3 ">
                      <div className="w-[35px]  duration-200 lg:w-[42px] lg:h-[42px] lg:min-h-[42px] lg:min-w-[42px] flex justify-center flex-1 rounded-full items-center bg-primary h-[35px] max-w-[35px] max-h-[35px]  mb-[10px]">
                        <ClockIcon color="white" size={20} />
                      </div>
                      <div className="mb-[10px]">
                        {`Eligibility : ${course.duration}`}
                      </div>
                    </div>
                  )}

                  {course.eligibility && (
                    <div className="flex items-center  duration-200 group box-border text-blackbg leading-none font-bold text-base gap-3 ">
                      <div className="w-[35px]  duration-200 lg:w-[42px] lg:h-[42px] lg:min-h-[42px] lg:min-w-[42px] flex justify-center flex-1 rounded-full items-center bg-primary h-[35px] max-w-[35px] max-h-[35px]  mb-[10px]">
                        <GraduationCapIcon color="white" size={20} />
                      </div>
                      <div className="mb-[10px]">
                        {`Duration : ${course.eligibility}`}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative max-w-[723px]"></div>
            </div>
          ))}
        </div>
      </section>
      <section className=" font-main pb-16 pt-20 lg:pb-32 px-5% lg:pt-40 bg-[#fbfbfb]">
        <div className="mx-auto max-w-full lg:max-w-7xl ">
          <div className="max-w-3xl">
            <div className="w-full" data-aos="fade-in" data-aos-duration="800">
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
                      <h3 className="mb-4  text-black text-2xl font-bold leading-snug">Stages</h3>
                      <ol className="list-decimal ml-7">
                        {course.stages.map((stage) => (
                          <li className="text-base mb-1 text-textgray">{stage}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getData = async (slug) => {
  const query = `*[_type=="course" && slug.current == "${slug}"]`;
  const couses = await client.fetch(query);
  return couses;
};

export const revalidate = 3600;
export default page;
