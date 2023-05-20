import React from 'react'
import { client , urlFor } from '@lib/client'



const page = async ({params : {slug}}) => {
  const courseDetails = await getData(slug);
  return (
    <div>{slug} {courseDetails.map((course) => (
      <div>
        {course.title}
        {course.shortDescription}
        {urlFor(course.image).url()}
      </div>
    ))}</div>
  )
}

export const getData = async (slug) => {
  const query = `*[_type=="course" && slug.current == "${slug}"]`
  const couses = await client.fetch(query);
  return couses
}

export const revalidate = 60;
export default page