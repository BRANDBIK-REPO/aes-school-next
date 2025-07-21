import React from "react";
import Link from "next/link";
import { footerLinks } from "@/constants";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="overflow-x-hidden px-5% py-16 bg-white border-t border-slate-200 font-main">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Logo and description */}
          <div className="flex flex-col md:col-span-3">
            <div className="mb-3">
              <Image src="/assets/logo.png" alt="AE School of Commerce Logo" width={160} height={60} />
            </div>
            <p className="max-w-[30ch] text-slate-600 text-base">
              AE's School of Commerce - The Best Accounting Institute in Perinthalmanna. Empowering your future in accountancy.
            </p>
            <div className="flex gap-6 mt-8">
              <Link
                href="https://www.instagram.com/aesschoolofcommerce?igsh=MWoxZWxzOXl2cG9rZQ=="
                target="_blank"
                aria-label="Instagram"
                className="flex justify-center items-center w-10 h-10 text-xl rounded-full border duration-150 border-slate-200 hover:border-primary hover:text-primary text-slate-600"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://wa.me/918089145551?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses%20at%20AE%20School%20of%20Commerce."
                target="_blank"
                aria-label="WhatsApp"
                className="flex justify-center items-center w-10 h-10 text-xl rounded-full border duration-150 border-slate-200 hover:border-green-500 hover:text-green-500 text-slate-600"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
          {/* Footer navigation links */}
          {footerLinks.map((footerlink, index) => (
            <div key={index}>
              <div className="text-slate-500 text-xs tracking-[0.06em] font-semibold leading-4 mb-6 uppercase">
                {footerlink.title}
              </div>
              <ul className="flex flex-col gap-5">
                {footerlink.links.map((link, idx) => (
                  <li key={idx}>
                    <Link className="text-base duration-150 text-slate-700 hover:text-primary" href={link.url}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-sm text-center text-slate-400">
          &copy; {new Date().getFullYear()} AE's School of Commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
