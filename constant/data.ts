import {
  AudioWaveform,
  Bolt,
  BookDown,
  BookOpen,
  Bot,
  Boxes,
  Codesandbox,
  Command,
  Frame,
  GalleryVerticalEnd,
  HandCoins,
  Inbox,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const data = {
  user: {
    name: "Yousef Harara",
    email: "hrarty37@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Mohammed ali",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Sayed Aya",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Eran Yagur",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  menu: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: Frame,
    },
    {
      name: "Products",
      url: "/dashboard/products",
      icon: Boxes,
    },
    {
      name: "Categories",
      url: "/dashboard/categories",
      icon: Inbox,
    },
    {
      name: "Orders",
      url: "/dashboard/orders",
      icon: Inbox,
    },
    {
      name: "Customers",
      url: "/dashboard/customers",
      icon: Codesandbox,
    },
    {
      name: "Payments",
      url: "/dashboard/payment",
      icon: HandCoins,
    },
    {
      name: "Reports",
      url: "/dashboard/reports",
      icon: BookDown,
    },
    {
      name: "Settings",
      url: "/dashboard/settings",
      icon: Bolt,
    },
  ],
};
