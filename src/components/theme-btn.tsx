"use client"

import { useEffect, useState } from "react"
import { LuMoon, LuSunMedium } from "react-icons/lu"

export default function ThemeBtn() {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    setDarkTheme((s) => !s)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      className="rounded-lg p-2 text-xl hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
      onClick={toggleDarkTheme}
    >
      {darkTheme ? <LuMoon /> : <LuSunMedium />}
    </button>
  )
}
