"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationData } from "../../data/navigationData";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

const navigation = navigationData;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state based on scroll position
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className='w-full bg-brickred-600 text-white'
    >
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-20">
        <div className="flex items-center pr-5 py-4">
          <Link aria-current="page" className="flex items-center" href="/">
            <h1 className="uppercase font-bold">Build And Run Company</h1>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="inline-block rounded-lg px-2 py-1 text-md text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              aria-current={item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block pl-5 py-5">
          <div className="flex gap-2">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className='flex items-center justify-center w-8 h-8 text-white rounded-full bg-transparent'
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className='flex items-center justify-center w-8 h-8 text-white rounded-full bg-transparent'
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className='flex items-center justify-center w-8 h-8 text-white rounded-full bg-transparent'
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div
          className='block lg:hidden'
        >
          <Bars3Icon
            className="block h-6 w-6"
            aria-hidden="true"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawerdata />
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
