import "@styles/globals.css";
import Navbar from "@components/Navbar";

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
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
