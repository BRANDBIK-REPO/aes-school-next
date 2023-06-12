import React from "react";
import { client } from "@lib/client";
import { urlFor } from "@lib/client";
import Fancybox from "./FancyBox";
import Image from "next/image";

async function getCourse() {
  const query = '*[_type=="images" ]';
  const importantCourses = await client.fetch(query);
  return importantCourses;
}

export const metadata = {
  title: `Captivating Moments at AE's School of Commerce | Photo Gallery`,
  description: `Browse through our photo gallery showcasing captivating moments and events at AE's School of Commerce. Get a glimpse of our vibrant campus and engaging learning environment.`,
};

const page = async () => {
  const data = await getCourse();
  return (
    <div className="overflow-hidden bg-[#fbfbfb] px-5% font-main py-20 md:py-[100px] lg:py-32 ">
      <div className="mx-auto max-w-7xl">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          {data.map((data) => (
            <a
              data-fancybox="gallery"
              className="w-full h-auto relative"
              href={urlFor(data.image).url()}
            >
              <Image
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw"
                src={urlFor(data.image).url()}
              />
            </a>
          ))}
        </Fancybox>{" "}
      </div>
    </div>
  );
};

export const revalidate = 3600;
export default page;
