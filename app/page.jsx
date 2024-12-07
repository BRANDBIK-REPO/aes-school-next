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

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AE's School of Commerce",
              "alternateName": "Best Accounting Course in Perinthalmanna | Best CA Institute",
              "url": "https://www.aessoc.com/",
              "logo": "https://www.aessoc.com/_next/image?url=%2Fassets%2Flogo.png&w=1920&q=75",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 80891 45551",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "Malayalam"]
              },
              "sameAs": [
                "https://www.instagram.com/aesschoolofcommerce/",
                "https://www.facebook.com/aesschoolofcommerce"
              ]
            }),
          }}
        ></script>
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
