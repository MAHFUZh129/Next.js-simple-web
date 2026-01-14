"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 py-1 w-full bg-white/80 backdrop-blur shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl flex gap-2 items-center font-bold text-blue-600">
        <img className="h-17 w-17" src="/image.png" alt="" />
        <p className="font-extrabold ">jOB<span className="text-red-600 font-extrabold italic">HUB</span></p>
           
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`font-medium transition ${
                  pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col">
            {links.map(link => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 border-b ${
                    pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link
              href="/login"
              className="m-4 text-center py-2 rounded bg-blue-600 text-white"
            >
              Login
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
