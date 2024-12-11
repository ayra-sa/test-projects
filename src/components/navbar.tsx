import Image from "next/image";
import React from "react";
import { TeamSwitcher } from "./team-switcher";
import { Avatar } from "./ui/avatar";

const data = {
  teams: [
    {
      name: "Dara & Arifin Weddings",
      logo: "/sample-img.png",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: "/sample-img.png",
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: "/sample-img.png",
      plan: "Free",
    },
  ],
};

const Navbar = () => {
  return (
    <header className="fixed z-20 w-full py-5 border-b border-b-slate-300 bg-white">
      <nav>
        <div className="px-7 flex items-center gap-x-20">
          <Image src="/logo.svg" alt="logo" width={150} height={100} />

          <div className="flex items-center justify-between w-full">
            <TeamSwitcher teams={data.teams} />
            <div className="flex items-center gap-x-3">
              <Avatar>
                <div className="w-11 h-11 bg-[#B1B1B1] rounded-full" />
              </Avatar>
              <p className="font-semibold">My Account</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
