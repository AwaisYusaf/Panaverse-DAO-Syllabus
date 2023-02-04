import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex justify-between sticky top-0 items-center shadow-md md:px-4 md:pr-12 backdrop-blur-md">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/assets/logo.png" width="80" height="80" alt="logo" />
          <p className="font-semibold text-2xl">Panaverse</p>
        </div>
      </Link>

      <div className="hidden md:flex">
        <Link href="/" className="mx-8 font-semibold">
          Home
        </Link>
        <Link href="/courses" className="mx-8 font-semibold">
          Courses
        </Link>
        <Link href="/about" className="mx-8 font-semibold">
          About
        </Link>
        <Link href="/contact" className="mx-8 font-semibold">
          Contact
        </Link>
      </div>

      <div className="hidden md:flex">
        <Link
          href="https://portal.piaic.org"
          className="text-red-500 font-medium hover:underline"
        >
          Apply Now
        </Link>
      </div>
      <div className="flex md:hidden mr-4">
        <div>
          <button className="relative group">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-red-500 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                <div className="bg-red-500 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                <div className="bg-red-500 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-red-500 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-red-500 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
