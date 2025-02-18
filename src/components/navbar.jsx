"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className=" hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* for my logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"
        >
          <span className="text-white mr-1">Subiyal</span>
          <span className="w-12 h-8 rounded flex justify-center items-center  bg-white text-black">
            .Dev
          </span>
        </Link>
      </div>
      {/* for social media icons */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="github logo" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="github logo" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image
            src="/instagram.png"
            alt="github logo"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="github logo" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image
            src="/pinterest.png"
            alt="github logo"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* for menu button */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1  bg-white rounded"></div>
          <div className="w-10 h-1  bg-white rounded"></div>
          <div className="w-10 h-1  bg-white rounded"></div>
        </button>
        {/* for nav links */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-7 text-3xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
