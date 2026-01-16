"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoMdMenu } from "react-icons/io";
import { MdLogin, MdLogout } from "react-icons/md";


const links = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: " Add Job", path: "/add-job" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/api/auth", { cache: "no-store" })
      .then(res => res.json())
      .then(data => setLoggedIn(data.loggedIn));

  }, [pathname]);


  const handleLogout = async () => {
    const res = await fetch("/api/logout", { method: "POST" });
    if (res.ok) {
      toast.success("Logged out successfully!!");
      setLoggedIn(false);
      router.push("/login");
    } else {
      toast.error("Logout failed!");
    }

    // setLoggedIn(false);

    // router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 py-1 w-full bg-white/80 backdrop-blur shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl flex gap-2 items-center font-bold text-blue-600">
          <img className="h-17 w-17" src="/image.png" alt="" />
          <p className="font-extrabold ">jOB<span className="text-amber-600 font-extrabold italic">HUB</span></p>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`font-medium transition ${pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login / Logout Button */}
        <div className="hidden md:block">
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 font-semibold text-[14px]  flex items-center gap-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            ><MdLogout size={19}/>

              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 font-semibold text-[14px] flex items-center gap-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            ><MdLogin size={19} />

              Login
            </Link>
          )}
        </div>

       

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
         <IoMdMenu />

        </button>
      </nav>

      {/* Mobile Menu */}
     {open && (
  <div className="md:hidden fixed inset-0 z-50 bg-black/40">
    <div
      className="
        bg-white
        w-[90%]
        max-w-sm
        h-screen
        overflow-y-auto
        mx-auto
        animate-slideDown
        rounded-b-2xl
      "
    >
      <ul className="flex flex-col divide-y pt-4">
        {links.map(link => (
          <li key={link.path}>
            <Link
              href={link.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 transition
                ${pathname === link.path
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="p-6 mt-auto">
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-xl bg-red-500 text-white"
          > 
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="block w-full py-3 rounded-xl bg-blue-600 text-white text-center"
          > 
            Login
          </Link>
        )}
      </div>
    </div>
  </div>
)}

    </header>
  );
}
