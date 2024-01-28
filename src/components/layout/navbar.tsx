"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleClick = async () => {
    setNavbar(false);
  };

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navbar]);

  return (
    <nav className="select-none bg-background">
      <div className="flex justify-between">
        <Link href="/" onClick={handleClick} className="flex items-center">
          <h1 className="text-lg font-bold">/{siteConfig.name}</h1>
        </Link>
        <div className="flex gap-4">
          <ul className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
            <li className="hover:underline">
              <Link href="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="/dashboard" onClick={handleClick}>
                Dashboard
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="/experience" onClick={handleClick}>
                Experience
              </Link>
            </li>
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
