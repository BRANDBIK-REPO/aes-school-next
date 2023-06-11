import React from "react"
import { client } from "@lib/client"
import { urlFor } from "@lib/client"
import Fancybox from "./FancyBox"

async function getCourse() {
  const query = '*[_type=="images" ]'
  const importantCourses = await client.fetch(query)
  return importantCourses
}

const page = async () => {
  const data = await getCourse()
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
            <a data-fancybox="gallery" className="w-full" href={urlFor(data.image).url()}>
              <Image src={urlFor(data.image).url()} />
            </a>
          ))}
        </Fancybox>{" "}
      </div>
    </div>
  )
}

export const revalidate = 3600
export default page
