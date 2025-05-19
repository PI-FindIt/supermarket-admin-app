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
        url: "/storeLayout",
        items: [],
      },
      {
        title: "SupermarketInfo",
        icon: Lucide.FilePlus2,
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