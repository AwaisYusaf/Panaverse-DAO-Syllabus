import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <div className="flex">
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
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }: any) => (
                <Link
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: any) => (
                <Link
                  href="/courses"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Courses
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: any) => (
                <Link
                  href="/about"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  About
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }: any) => (
                  <Link
                    href="/contact"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Contact Us
                  </Link>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

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
      <div className="flex md:hidden mr-6">
        <Example />
      </div>
    </header>
  );
}

export default Header;
