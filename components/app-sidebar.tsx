"use client";

import * as React from "react";
import { NavLogout } from "@/components/nav-logout";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMenu } from "./features/sidebar/NavManu";
import { data } from "@/constant/data";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
        <NavMenu manu={data.menu} />
      </SidebarContent>
      <SidebarFooter>
        <NavLogout />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
