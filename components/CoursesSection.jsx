import GhostButton from "./GhostButton";
import { courses } from "../constants";
import Button from "./Button";
import AnimatedButton from "./AnimatedButton";
import animationJson from "@/lottie/system-outline-19-book.json";
import Link from "next/link";

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
        <div className="relative z-10">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="grid md:grid-cols-2 lg:grid-cols-3 relative text-center grid-flow-row mt-20 gap-5 md:gap-5 lg:gap-6"
          >
            {courses.map((course) => (
              <Link
                className="group shadow-faq lg:hover:shadow-faq-hover relative z-10 duration-200 lg:hover:-translate-y-2"
                href="./about"
              >
                <div className="bg-white flex flex-col justify-center text-left ">
                  <div className="w-full object-cover h-56">
                    <img
                      className="object-cover h-full w-full "
                      loading="lazy"
                      src="/assets/simple.jpg"
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
                      href={`/courses/${course.slug}`}
                      icon={false}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            className="absolute -top-2  lg:-top-4 -right-4 lg:-right-10 w-36 h-36 z-0 "
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
          <div
            className="absolute -top-2 lg:top-auto lg:-bottom-4 -left-4 lg:-left-10 w-36 h-36 z-0 "
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
