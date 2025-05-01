import React, { ReactNode } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={
        " fixed overflow-hidden h-[100vh] z-30 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          "w-340px max-w-lg left-0 absolute bg-brickred-500 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative w-270 max-w-lg pb-10 flex flex-col space-y-6 h-full">
          <header className="pt-6 pl-6 flex items-center justify-between">
            <Link aria-current="page" className="flex items-center" href="/">
              <h1 className="uppercase font-bold">Build & Run Company</h1>
            </Link>
            <XMarkIcon
              className="block cursor-pointer h-6 w-6 mr-6"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {children}
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
