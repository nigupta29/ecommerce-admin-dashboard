import { HiUsers } from "react-icons/hi2"
import Logo from "../../logo"
import SidebarItem from "./sidebar-item"

import {
  MdAttachMoney,
  MdHelpCenter,
  MdOutlineSettings,
  MdShoppingBag,
  MdSpaceDashboard
} from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const sidebarItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        Icon: <MdSpaceDashboard />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        Icon: <HiUsers />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        Icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        Icon: <FaMoneyCheck />
      }
    ]
  },
  {
    title: "Profile",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        Icon: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        Icon: <MdHelpCenter />
      }
    ]
  }
]

export default function Sidebar() {
  return (
    <aside className="h-full w-full bg-stone-100 p-5 shadow dark:bg-stone-900">
      <div className="flex h-full flex-col gap-6">
        <Logo />
        <nav className="space-y-4">
          {sidebarItems.map(({ title, list }) => (
            <div key={title} className="space-y-2">
              <h3 className="px-1 font-semibold text-stone-500 dark:text-stone-400">
                {title}
              </h3>
              <ul className="space-y-1">
                {list.map((item) => (
                  <SidebarItem key={item.title} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
