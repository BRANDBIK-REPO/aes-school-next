import Hero from "@components/Hero";
import CoursesSection from "@components/CoursesSection";
import Features from "@components/Features";
import AboutSection from "@components/AboutSection";
import Faq from "@components/Faq";
import TestimonialSection from "@components/TestimonialSection";
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  return (
    < >
      <Hero />
      <CoursesSection />
      <Features />
      <AboutSection />
      <TestimonialSection />
      <Faq />  
      <Analytics />
    </>
  );
};

export default Home;
