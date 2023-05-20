import React from "react";
import Faq from "@components/Faq";
import ContactPage from "./Contact";

export const metadata = {
  title : 'Get in touch ',
  description : 'Want to know more about how to enroll in our specially designed courses and build a great career out of it. Lets talk and start realizing your dreams now.'
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
