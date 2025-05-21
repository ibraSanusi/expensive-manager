"use client";

import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-10 flex items-center justify-between p-4 mt-4 max-w-7xl mx-auto transition-colors duration-300 rounded-xl",
        scrolled
          ? "bg-transparent/80 backdrop-blur-md outline outline-accent rounded-xl "
          : "bg-transparent",
      )}
    >
      <Link href={"/"} className="text-2xl leading-none font-bold">
        💸 FinanceFlow
      </Link>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;
