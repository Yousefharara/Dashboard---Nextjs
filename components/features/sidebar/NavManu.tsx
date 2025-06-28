"use client"

import {
  type LucideIcon,
} from "lucide-react"


import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function NavMenu({
  manu,
}: {
  manu: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {

  return (
    <SidebarGroup className="">
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {manu.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
