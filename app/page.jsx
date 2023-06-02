import Hero from "@components/Hero";
import CoursesSection from "@components/CoursesSection";
import Features from "@components/Features";
import AboutSection from "@components/AboutSection";
import Faq from "@components/Faq";
import TestimonialSection from "@components/TestimonialSection";
import { Analytics } from '@vercel/analytics/react';
import { client } from "@lib/client";

async function getData() {
  const query = '*[_type=="course"]'
  const products = client.fetch(query)
  return products;
}

const Home = async ()  => {
  const data = await getData();
  return (
    < >
      <Hero  />
      <CoursesSection data={data} />
      <Features />
      <AboutSection />
      <TestimonialSection />
      <Faq />  
      <Analytics />
    </>
  );
};
export const revalidate = 3600;
export default Home;
