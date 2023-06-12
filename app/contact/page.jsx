import React from "react";
import Faq from "@components/Faq";
import ContactPage from "./Contact";

export const metadata = {
  title : `Contact AE's School of Commerce | Get in Touch with Us`,
  description : `Have questions? Contact AE's School of Commerce today. We're here to assist you and provide more information about our courses, admissions, and any other inquiries you may have.`
}

const Contact = () => {
  return (
    <>
      <ContactPage />
      <Faq />
    </>
  );
};

export default Contact;
