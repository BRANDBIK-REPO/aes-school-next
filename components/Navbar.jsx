"use client"

import React, { useState, useEffect } from "react"
import { navLinks } from "../constants"
import Link from "next/link"
import Image from "next/image"
import NextNProgress from "nextjs-progressbar"
import { usePathname } from "next/navigation"



const Navbar = () => {
  const pathname = usePathname()
  
  const [isMenu, setIsMenu] = useState(false)
  return (
    <>
      <NextNProgress />
      <header
        className={`flex fixed top-0 left-0 w-full h-auto max-h-[6rem] font-main px-5% items-center z-50 bg-white `}
        data-aos="fade-in"
        data-aos-duration="500"
      >
        <div className="flex justify-between items-center py-6 mx-auto w-full max-w-7xl h-full">
          <Link href="/" aria-current="page" className="w-[180px] relative h-[80px]" aria-label="home">
            <Image src="/assets/logo.png" sizes="100vw" fill={true} alt="Chartered Accountancy institute in Perinthalmanna" className="relative z-30" />
          </Link>
          <nav
            className={`lg:relative ${
              isMenu ? "translate-x-0" : "translate-x-full"
            } nav bg-white absolute h-screen lg:h-auto  right-0 left-0 -translate-x-full lg:translate-x-0 duration-100 lg:duration-0 lg:transition-none top-0 flex-col bg-primarybg lg:bg-transparent text-textwhite w-full lg:w-auto  z-30  pt-20 lg:pt-0 pb-5 lg:pb-0  justify-center  items-center`}
          >
            <ul className="flex flex-col gap-4 pt-10 pl-10 lg:gap-3 lg:flex-row lg:pt-0 lg:pl-0 lg:items-center">
              {navLinks.map((navlink, index) =>  (
                
                <li className="mb-0" key={index}>
                  <Link
                    onClick={() => setIsMenu(!isMenu)}
                    href={navlink.link}
                    className={`relative lg:hover:text-primary font-[500] tap-highlight-color-transparent text-left ${pathname == navlink.link   ? "text-primary" : "text-blackbg lg:text-zinc-600" }    inline-block align-top text-xl  lg:text-[17px] lg:mx-auto py-2 px-4`}
                  >
                    {navlink.page}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="z-40 gap-8 md:flex">
            <Link
              href="https://wa.me/918089145551?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses%20at%20AE%20School%20of%20Commerce."
              className="py-[16px] hidden md:flex  gap-4 items-center text-base rounded-full duration-200 shadow-cta lg:hover:shadow-none  px-[34px] bg-primary lg:hover:bg-indigo-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary focus:outline-none backdrop-blur-sm  text-white  leading-[20px]  font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-base">Get in touch</div>
            </Link>

            <button
              onClick={() => setIsMenu(!isMenu)}
              aria-label="Menu"
              className="relative z-40 button lg:hidden tap-highlight-color-transparent"
            >
              {isMenu ? (
                <Image src="/assets/close.svg" width={18} height={18} />
              ) : (
                <Image src="/assets/menu.svg" width={24} height={24} alt="Best CA coaching center in Perinthalmanna" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
