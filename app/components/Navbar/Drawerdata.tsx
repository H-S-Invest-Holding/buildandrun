import React from "react";
import Link from "next/link";
import { navigationData } from "../../data/navigationData";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const navigation = navigationData;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
        
                  "px-2 py-1 text-lg text-white opacity-80 hover:opacity-100 font-normal block"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <div className="p-2">
              <div className="flex gap-2">
                <Link
                  href="https://www.linkedin.com/company/groupe-dislog/"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 text-white"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 text-white"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 text-white"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
