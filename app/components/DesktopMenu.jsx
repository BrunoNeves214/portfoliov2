"use client";

import Link from "next/link";

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

export default function DesktopMenu() {
  return (
    <div>
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <Link href={link.ref} key={link.id}>
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
