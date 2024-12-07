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
  title: "Top CMA Institute in Perinthalmanna | AE School of Commerce",
  description: `Best CMA Institute in Perinthalmanna, AE's School of Commerce, can help you realize your CMA goals by providing top-notch coaching and best practical training`,
};
useEffect(() => {
    // Initialize Google Analytics once
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-6ZYD0RKJ4E'); //
  }, []);
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
