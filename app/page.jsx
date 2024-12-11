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
 
const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Top CMA Institute in Perinthalmanna | AE School of Commerce",
        "item": "https://www.aessoc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Best Accounting Course in Perinthalmanna | Best CA Institute",
        "item": "https://www.aessoc.com/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Best ACCA Institute in Perinthalmanna | Expert ACCA Coaching",
        "item": "https://www.aessoc.com/gallery"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Top Accounting Courses in Malappuram | AE's School of Commerce",
        "item": "https://www.aessoc.com/about"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Top Accounting Courses in Palakkad | AE's School of Commerce",
        "item": "https://www.aessoc.com/contact"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Best CA Institute in Perinthalmanna | Best Accounting Course",
        "item": "https://www.aessoc.com/courses/catlam"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Top Accounting Institute in Perinthalmanna | Best CA Courses",
        "item": "https://www.aessoc.com/courses/ifrs"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Best CA Course in Perinthalmanna | AE's School of Commerce",
        "item": "https://www.aessoc.com/courses/ca"
      },
      {
        "@type": "ListItem",
        "position": 9,
        "name": "CMA Course in Perinthalmanna | Best CMA Institute | AE SOC",
        "item": "https://www.aessoc.com/courses/cma"
      },
      {
        "@type": "ListItem",
        "position": 10,
        "name": "Best CS Course in Perinthalmanna | Best Accounting Institute",
        "item": "https://www.aessoc.com/courses/cs"
      }
    ]
  };
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
