import React from "react";
import Link from "next/link";

const Button = ({ text, href }) => {
  const isWhatsApp = text === "Get Free Consultation";
  const whatsAppLink = "https://wa.me/918089145551?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses%20at%20AE%20School%20of%20Commerce.";
  return (
    <Link
      className="bg-primary duration-200 tap-highlight-color-transparent focus:border-none lg:hover:bg-indigo-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary focus:outline-none px-10 py-5 shadow-cta lg:hover:shadow-none rounded-full text-white"
      href={isWhatsApp ? whatsAppLink : (href !== undefined ? href : "/consultation")}
      target={isWhatsApp ? "_blank" : undefined}
      rel={isWhatsApp ? "noopener noreferrer" : undefined}
    >
      {text}
    </Link>
  );
};

export default Button;
