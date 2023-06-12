import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Badge from "@components/Badge";
import Script from "next/script";

export const metadata = {
  title: "AE's School of Commerce | Best Accounting Campus in Perinthalmanna",
  description: `Unlock your potential in accountancy and finance at AE's School of Commerce, the leading accounting campus in Perinthalmanna. Explore our comprehensive courses in CA, CMA, CS, IFRS, and CATLAM. Contact us today for more information and take the first step towards a successful career.`,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-CM6HSXLD0E`}
      ></Script>
      <Script>{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-CM6HSXLD0E')`}</Script>
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
