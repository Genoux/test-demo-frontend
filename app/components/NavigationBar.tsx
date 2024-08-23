"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full py-6 px-4 md:px-8">
      <div className="flex items-center select-none">
        <Image
          src="/logo.svg"
          alt="logo Logo"
          width={100}
          height={24}
          priority
        />
      </div>
      <div className="hidden md:flex flex-row items-center justify-center gap-16">
        <ul className="flex justify-center items-center gap-12 text-[#969696] text-sm leading-normal font-medium select-none">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Market</Link>
          </li>
          <li>
            <Link className="font-bold text-black" href="#">
              Blog
            </Link>
          </li>
          <li className="flex justify-center items-center gap-1">
            <Link href="#">Career</Link>
            <div className="bg-primary-blue py-[2px] px-[6px] rounded-full">
              <span className="font-semibold text-xs leading-normal text-white select-none flex justify-center items-center">
                hiring
              </span>
            </div>
          </li>
        </ul>
        <Link
          className="bg-primary-blue text-white py-2 px-3 rounded-sm select-none font-semibold text-[15px] leading-normal hover:bg-blue-500"
          href="#"
        >
          Get Started
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
  <div className="md:hidden absolute top-24 right-0 w-full bg-white  transition-transform transform duration-300 ease-in-out bg-transparent px-2 ">
    <ul className="flex flex-col items-center gap-5 py-6 text-[#969696] text-sm leading-normal font-medium select-none px-4 bg-white shadow-md">
      <li className="border-b-[1px] border-gray-300 ">
        <Link href="#" aria-label="Home">Home</Link>
      </li>
      <li className="border-b-[1px] border-gray-300 ">

        <Link href="#" aria-label="Market">Market</Link>
      </li>
      <li className="border-b-[1px] border-gray-300 ">

        <Link className="font-bold text-black" href="#" aria-label="Blog">
          Blog
        </Link>
      </li>
      <li className="flex justify-start items-center md:gap-1 gap-2 ">
        <Link href="#" className="border-b-[1px] border-gray-300" aria-label="Career">Career</Link>
        <div className="bg-primary-blue py-[2px] px-[6px] rounded-full">
          <span className="font-semibold text-xs leading-normal text-white select-none flex justify-center items-center">
            hiring
          </span>
        </div>
      </li>
      <li>
        <Link
          className="bg-primary-blue text-white py-2 px-3 rounded-sm select-none font-semibold text-[15px] leading-normal hover:bg-blue-500"
          href="#"
          aria-label="Get Started"
        >
          Get Started
        </Link>
      </li>
    </ul>
  </div>
)}
    </div>
  );
};

export default NavigationBar;