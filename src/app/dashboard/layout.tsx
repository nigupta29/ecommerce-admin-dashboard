import Navbar from "@/components/dashboard/navbar"
import Sidebar from "@/components/dashboard/sidebar"

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex">
      <div className="absolute z-50 hidden h-screen w-[300px] bg-stone-500 md:relative md:block">
        <Sidebar />
      </div>
      <div className="flex-1 space-y-5 overflow-hidden p-5">
        <Navbar />
        <main className="mx-auto max-w-7xl">{children}</main>
      </div>
    </div>
  )
}
