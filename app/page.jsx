import Hero from "@components/Hero";
import CoursesSection from "@components/CoursesSection";
import Features from "@components/Features";
import AboutSection from "@components/AboutSection";
import Faq from "@components/Faq";
import AOSComponent from "@components/AOS";
import Badge from "@components/Badge";

const Home = () => {
  return (
    <>
      <AOSComponent />
      <Hero />
      <CoursesSection />
      <Features />
      <AboutSection />
      <Faq />
      <Badge />  
    </>
  );
};

export default Home;
