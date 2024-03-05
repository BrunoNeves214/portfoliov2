import ThemeToggle from "../components/ThemeToggle";
import { SlNotebook } from "react-icons/sl";
import MobileMenu from "../components/MobileMenu";
import DesktopMenu from "../components/DesktopMenu";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center h-[70px]">
      {/* LOGO */}
      <Link href={"/"} className="flex items-center gap-1 uppercase">
        <h1>
          Port<span className="text-blue-500">folio</span>
        </h1>
        <SlNotebook size={30} className="text-blue-500" />
      </Link>

      {/* DARK/LIGHT MODE */}
      <ThemeToggle />

      {/* MOBILE NAV LINKS */}
      {/* <MobileMenu /> */}

      {/* DESKTOP NAV LINKS */}
      {/* <DesktopMenu /> */}
    </nav>
  );
}
