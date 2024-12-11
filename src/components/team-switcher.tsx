import * as React from "react";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: string;
    plan: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-x-2 px-1.5">
          <Image
            src={activeTeam.logo || "/sample-img.png"}
            alt="img"
            width={30}
            height={30}
          />
          {/* <div className="flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
          </div> */}
          <span className="truncate font-semibold">{activeTeam.name}</span>
          <ChevronDown className="opacity-50 text-primary" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 rounded-lg"
        align="start"
        side="bottom"
        sideOffset={4}
      >
        {/* <DropdownMenuLabel className="text-xs text-muted-foreground">
          Teams
        </DropdownMenuLabel> */}
        {teams.map((team) => (
          <DropdownMenuItem
            key={team.name}
            onClick={() => setActiveTeam(team)}
            className="gap-2 p-2"
          >
            <div className="flex size-6 items-center justify-center rounded-sm border">
              <Image src={team.logo} alt="img" width={30} height={30} />
            </div>
            {team.name}
          </DropdownMenuItem>
        ))}
        <div className="p-2 flex items-center justify-between w-full">
          <Link href={"/"} className="underline">
            View All
          </Link>

          <Button variant={"outline"}>Create New Event</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
    // <SidebarMenu>
    //   <SidebarMenuItem>
    //   </SidebarMenuItem>
    // </SidebarMenu>
  );
}
