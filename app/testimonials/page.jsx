import React from 'react'

export const metadata = {
  title : 'Hello',
  decription : 'description'
}

const Testimonials = () => {
  return (
    <div className="flex justify-between items-center">
                <div className="py-[18px] px-[26px] bg-black text-white leading-[1.1] font-bold text-center">Featured Course</div>
                <GhostButton text="Learn More" />
              </div>
  )
}

export default Testimonials