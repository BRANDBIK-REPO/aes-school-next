import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Badge from "@components/Badge";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body>
        <div className="overflow-hidden">
          <Navbar />
          <main className="pt-[6rem]">{children}</main>
          <Badge />
          <Footer />
        </div>
      </body>
    </html>
  );
}
