import React from "react";
import AboutPageHead from "./AboutPageHead";
import Mission from "./Mission";
import OurOffers from "./OurOffers";

export const metadata = {
  title: "About us",
  description: "",
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
