import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Badge from "@components/Badge";

export const metadata = {
  title: "AE'S School of Commerce : The best accounting campus in malappuram",
  description: `Learn accounting from the best campus in malappuram under the guidance of the best faculties. Top the world of accounting with AE's school of commerce.`,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
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
