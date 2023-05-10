import GhostButton from "./GhostButton";
import { courses } from "../constants";
import Button from "./Button";
import AnimatedButton from "./AnimatedButton";
import animationJson from "@/lottie/system-outline-19-book.json";

const CoursesSection = () => {
  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-5% font-main pt-16 lg:pt-20 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex relative flex-col text-center lg:text-left lg:flex-row justify-between items-center">
          <h2 className="text-black md:max-w-lg font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]">
            What courses are teaches in our campus ?
          </h2>
          <p className="text-textgray flex-1 md:max-w-lg text-lg mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac
            elit senectus mauris blandit tempore gestas.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 lg:grid-cols-3 text-center grid-flow-row mt-20 gap-5 md:gap-5 lg:gap-6">
          {courses.map((course) => (
            <div className="bg-white flex flex-col justify-center shadow-faq  text-left ">
              <div className="w-full object-cover h-56">
                <img className="object-cover h-full w-full " loading="lazy" src='/assets/simple.jpg'></img>
              </div>

              <div className="p-8 ">
                <h3 className="mb-4 text-black text-2xl font-bold leading-snug">
                  {course.title}
                </h3>
                <p className="text-lg text-textgray mb-8">
                  {course.shortDescription}
                </p>
                <GhostButton text="View More" href={`/courses/${course.slug}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="md:mt-20 mt-14 flex flex-col text-center w-full md:justify-center md:items-center  md:flex-row gap-5 md:gap-3">
            <Button text="Get Free Consultation" />
            <AnimatedButton text="View Courses" animationData={animationJson} />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
