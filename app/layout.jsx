import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Badge from "@components/Badge";
import Script from "next/script";

export const metadata = {
  title: "AE'S School of Commerce : The best accounting campus in malappuram",
  description: `Learn accounting from the best campus in malappuram under the guidance of the best faculties. Top the world of accounting with AE's school of commerce.`,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG}`}
      ></Script>
      <Script>{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_TAG}')`}</Script>
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
