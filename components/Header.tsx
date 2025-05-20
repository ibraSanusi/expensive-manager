import React from "react";
import { clsx } from "clsx";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

function Header() {
  return (
    <header className={clsx("w-full flex items-center justify-between p-4")}>
      <Link href={"/"} className="text-2xl font-bold leading-none">
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
