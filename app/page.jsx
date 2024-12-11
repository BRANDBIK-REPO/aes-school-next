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

type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AE's School of Commerce",
  "image": "https://www.aessoc.com/_next/image?url=%2Fassets%2Flogo.png&w=1920&q=75",
  "@id": "",
  "url": "https://www.aessoc.com/",
  "telephone": "+91 80891 45551",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd floor, Sahari building, Jubilee Rd",
    "addressLocality": "Perintalmanna, Malappuram",
    "postalCode": "679322",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.9707316,
    "longitude": 76.220496
  }  
}
export const metadata = {
  title: "Top CMA Institute in Perinthalmanna | AE School of Commerce",
  description: `Best CMA Institute in Perinthalmanna, AE's School of Commerce, can help you realize your CMA goals by providing top-notch coaching and best practical training`,
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
