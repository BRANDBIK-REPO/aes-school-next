import Image from "next/image"

const Mission = () => {
  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-5% font-main pt-16 lg:pt-20 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex relative z-10 flex-col gap-10 justify-between items-center lg:flex-row">
          <div className="relative z-10 max-w-[610px] lg:mt-[52px] mb-8">
            <div
              className=" md:mb-12 mb-10 lg:mb-[156px]"
              data-aos="zoom-out"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h2 className="text-black md:text-4xl font-bold leading-tight text-[28px] lg:text-[40px]">Our Mission</h2>
              <p className="mt-6 text-textgray text-lg leading-[1.6]">
                AE's School of commerce offers best accounting courses in Perinthalmanna like CATLAM, IFRS, CA,
                and CMA. As the best accounting institute in Perinthalmanna, We provide comprehensive training and support for successful careers. Our commitment includes
                imparting knowledge, skills, and placement assistance to students. Our mission is to ensure diverse
                career opportunities and lifelong support for graduates.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/hero.jpeg"
                className="relative z-10"
              
                data-aos="zoom-out"
                alt="Best accounting courses in Perinthalmanna"
                data-aos-duration="800"
                data-aos-delay="300"
                width={800}
                height={600}
              />
              <div
                className="absolute -top-3 -left-3 z-0 lg:-top-10 lg:left-8"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="Affordable accounting institute in Perinthalmanna" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col-reverse gap-y-12 lg:gap-y-0 lg:flex-col z-10 max-w-[610px] mt-[52px] mb-8">
            <div className="relative mb-0  lg:mb-[171px]">
              <Image
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
                alt="Top ACCA coaching institute in Perinthalmanna"
                className="relative z-10"
                data-aos="zoom-out"
                data-aos-duration="800"
                width={800}
                height={600}
              />
              <div
                className="absolute -right-3 -bottom-7 z-0 lg:-bottom-16 lg:right-2"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Image src="/assets/pattern-grid.svg" width={100} height={100} alt="CA coaching classes in Perinthalmanna" />
              </div>
            </div>
            <div className="" data-aos="zoom-out" data-aos-duration="800" data-aos-delay="100">
              <h2 className="text-black md:text-4xl font-bold leading-tight text-[28px] lg:text-[40px]">Our Vision</h2>
              <p className="mt-6 text-textgray text-lg leading-[1.6] ">
                Our vision is to be a the best accounting institute globally recognized for excellence in accountancy certification
                courses. We shape the future of the accounting industry by producing highly skilled professionals. Our
                aim is to foster a learning environment that encourages continuous growth, innovation, and ethical
                practices. We make a positive impact on the profession by producing competent professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
