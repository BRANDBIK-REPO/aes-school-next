import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Badge from "@components/Badge";

export const metadata = {
  title: "AE's School Of Commerce",
  description: `Best Description for AE's School of commerce `,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
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
