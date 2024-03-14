"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

type SidebarItemProps = {
  item: {
    title: string
    path: string
    Icon: JSX.Element
  }
}

export default function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname()

  const isActiveRoute = pathname === item.path

  return (
    <Link
      href={item.path}
      className={twMerge(
        "flex items-center gap-2 rounded-lg px-4 py-2 text-xl text-stone-700 transition hover:bg-stone-200 hover:text-stone-950 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-stone-100",
        isActiveRoute &&
          "bg-stone-200 text-stone-950 dark:bg-stone-700 dark:text-stone-100"
      )}
    >
      {item.Icon}
      <span className="text-base">{item.title}</span>
    </Link>
  )
}
