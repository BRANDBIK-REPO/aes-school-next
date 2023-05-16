import Image from "next/image";

const Mission = () => {
  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-5% font-main pt-16 lg:pt-20 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col lg:flex-row z-10 justify-between items-center">
          <div className="relative z-10 max-w-[610px] lg:mt-[52px] mb-8">
            <div
              className=" md:mb-12 mb-10 lg:mb-[156px]"
              data-aos="zoom-out"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h2 className="text-black md:text-4xl font-bold leading-tight text-[28px] lg:text-[40px]">
                Our Mission
              </h2>
              <p className="mt-6 text-textgray text-lg leading-[1.6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                venenatis dictum et nec. Fringilla dictum tristique cras
                pellentesque morbi consequat, maecenas egestas a. Mi feugiat
                urna turpis placerat faucibus bibendum hac vulputate. Elit lacus
                accumsan, nullam semper gravida nunc, magna porta. Leo quis
                netus ac consequat sed. Volutpat ante donec.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/hero.jpeg"
                className="z-10 relative"
                data-aos="zoom-out"
                data-aos-duration="800"
                data-aos-delay="300"
              />
              <div
                className="absolute  lg:-top-10 -top-3 -left-3  lg:left-8  z-0 "
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Pattern shape" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col-reverse gap-y-12 lg:gap-y-0 lg:flex-col z-10 max-w-[610px] mt-[52px] mb-8">
            <div className="relative mb-0  lg:mb-[171px]">
              <img
                src="/assets/hero.jpeg"
                alt="An Image of Classroom "
                className="z-10 relative"
                data-aos="zoom-out"
                data-aos-duration="800"
              />
              <div
                className="absolute  lg:-bottom-16  lg:right-2 -bottom-7 -right-3 z-0 "
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Pattern shape" />
              </div>
            </div>
            <div
              className=""
              data-aos="zoom-out"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h2 className="text-black md:text-4xl font-bold leading-tight text-[28px] lg:text-[40px]">
                Our Vision
              </h2>
              <p className="mt-6 text-textgray text-lg leading-[1.6] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                venenatis dictum et nec. Fringilla dictum tristique cras
                pellentesque morbi consequat, maecenas egestas a. Mi feugiat
                urna turpis placerat faucibus bibendum hac vulputate. Elit lacus
                accumsan, nullam semper gravida nunc, magna porta. Leo quis
                netus ac consequat sed. Volutpat ante donec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
