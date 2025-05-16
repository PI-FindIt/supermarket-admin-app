import * as Lucide from "lucide-react";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Summary",
        icon: Lucide.ChartColumn,
        items: [
          {
            title: "Mercadona",
            url: "/dashboard"
          },
        ],
      },
      {
        title: "Layout",
        icon: Lucide.LayoutGrid,
        items: [],
      },
      {
        title: "SupermarketInfo",
        icon: Lucide.FilePlus2,
        items: [],
      },
      {
        title: "Account settings",
        url: "/profile",
        icon: Lucide.UserRound,
        items: [],
      },
    ],
  },
  {
    label: "",
    items: [
      {
        title: "Log out",
        icon: Lucide.LogOut,
        url: "/",
        items: [],
      }
    ]
  }
];