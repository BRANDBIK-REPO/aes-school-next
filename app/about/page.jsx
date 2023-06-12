import React from "react";
import AboutPageHead from "./AboutPageHead";
import Mission from "./Mission";
import OurOffers from "./OurOffers";

export const metadata = {
  title: "About AE's School of Commerce",
  description: "Learn about AE's School of Commerce, a trusted institute for accountancy and finance education. Discover our experienced faculty, state-of-the-art facilities, and dedication to providing quality education.",
};

const about = () => {
  return (
    <div>
      <AboutPageHead />
      <Mission />
      <OurOffers />
    </div>
  );
};

export default about;
