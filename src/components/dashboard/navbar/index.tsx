"use client"

import Avatar from "@/components/avatar"
import ThemeBtn from "@/components/theme-btn"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import Search from "../search"

export default function Navbar() {
  const pathname = usePathname()
  const dashboardPath = "/dashboard"

  const title = useMemo(
    () =>
      (pathname === dashboardPath
        ? dashboardPath
        : pathname.replace(dashboardPath, "")
      ).replace("/", ""),
    [pathname]
  )

  return (
    <header className="flex items-center gap-5 rounded-lg bg-stone-100 px-4 py-2 dark:bg-stone-900">
      <h3 className="flex-grow text-lg font-semibold capitalize">{title}</h3>

      <Search />
      <ThemeBtn />
      <Avatar />
    </header>
  )
}
