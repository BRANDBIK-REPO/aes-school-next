import CourseGrid from '@components/CourseGrid'
import CoursesHero from './CoursesHero'


const page = () => {
  return (
    <>
    <CoursesHero />
    <section className="overflow-hidden bg-[#fbfbfb] px-5% font-main py-20 md:py-[100px] lg:py-32 ">
      <div className="mx-auto max-w-7xl">
      
        <h2 className='text-black text-center max-auto  font-bold leading-tight text-[28px] md:text-4xl lg:text-[40px]'>Other Courses</h2>
        <div className='mb-10'>
        <CourseGrid />
        </div>
        
        
      </div>
      </section>
      </>
  )
}

export default page