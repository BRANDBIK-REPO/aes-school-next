import Hero from "@components/Hero";
import CoursesSection from "@components/CoursesSection";
import Features from "@components/Features";
import AboutSection from "@components/AboutSection";
import Faq from "@components/Faq";
import TestimonialSection from "@components/TestimonialSection";
import { Analytics } from "@vercel/analytics/react";
import { client } from "@lib/client";

async function getData() {
  const query = '*[_type=="course"]';
  const products = client.fetch(query);
  return products;
}

export const metadata = {
  title: "AE's School of Commerce | Best Accounting Campus in Perinthalmanna",
  description: `Unlock your potential in accountancy and finance at AE's School of Commerce, the leading accounting campus in Perinthalmanna. Explore our comprehensive courses in CA, CMA, CS, IFRS, and CATLAM. Contact us today for more information and take the first step towards a successful career.`,
};

const Home = async () => {
  const data = await getData();
  return (
    <>
      <Hero />
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
