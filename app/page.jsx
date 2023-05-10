

import Hero from "@components/Hero";
import CoursesSection from "@components/CoursesSection";
import Features from "@components/Features";
import AboutSection from "@components/AboutSection";
import Faq from "@components/Faq";
import Badge from "@components/Badge";
import TestimonialSection from "@components/TestimonialSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CoursesSection />
      <Features />
      <AboutSection />
      <TestimonialSection />
      <Faq />
      <Badge />  
    </>
  );
};

export default Home;
