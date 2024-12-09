import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Badge from "@components/Badge";
import Script from "next/script";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-6ZYD0RKJ4E`}
      ></Script>
      <Script>{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-6ZYD0RKJ4E')`}</Script>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
      <body>
        <div className="overflow-hidden">
          <Navbar />
          <main className="app">{children}</main>
          <Badge />
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
