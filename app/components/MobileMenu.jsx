"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const navLinks = [
  {
    id: 1,
    name: "Projects",
    ref: "#projects",
  },
  {
    id: 2,
    name: "Contacts",
    ref: "#contacts",
  },
];

export default function MobileMenu() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="block md:hidden">
      {/* MENU ICONS */}
      {toggle ? (
        <GrClose onClick={() => setToggle(!toggle)} size={30} />
      ) : (
        <GiHamburgerMenu onClick={() => setToggle(!toggle)} size={30} />
      )}

      {/* MENU TAB */}
      {toggle ? (
        <div className="absolute top-[90px] left-0 opacity-100 transition-all duration-300 ease-out bg-white/80 dark:bg-black/10 backdrop-blur-md w-full py-5 flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link href={link.ref} key={link.id}>
              <h1>{link.name}</h1>
            </Link>
          ))}
        </div>
      ) : (
        <div className="absolute top-[90px] left-[-100%] opacity-50 transition-all duration-300 ease-in bg-white/80 dark:bg-black/10 backdrop-blur-md w-full py-5 flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <Link href={link.ref} key={link.id}>
              <h1>{link.name}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
