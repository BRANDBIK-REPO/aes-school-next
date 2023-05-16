import ImportantCourse from "./ImportantCourse";

const CoursesHero = () => {
  return (
    <section className="overflow-hidden px-5%  font-main pt-10 lg:pt-20 py-32">
      <div
        className="mx-auto max-w-[671px] lg:px-6  text-center"
        data-aos="zoom-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h1 className="mt-0 mb-8 text-black text-[32px] leading-[1.15] lg:text-[61px] md:text-[58px] md:leading-[1.233] font-bold">
          Our Courses
        </h1>
        <p className=" text-lg text-textgray">
          Eiusmod nisi enim minim dolore fugiat cillum tempor officia aliqua
          aliqua. Elit dolore do exercitation officia adipisicing duis irure
          laborum eiusmod Lorem fugiat cillum.
        </p>
      </div>
      <div className="max-w-[1342px] mx-auto ">
        <ImportantCourse />
      </div>
    </section>
  );
};

export default CoursesHero;
