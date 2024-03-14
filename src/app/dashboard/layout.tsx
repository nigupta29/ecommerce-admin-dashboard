import Navbar from "@/components/dashboard/navbar"
import Sidebar from "@/components/dashboard/sidebar"

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex">
      <div className="absolute z-50 h-screen w-[300px] bg-stone-500 md:relative">
        <Sidebar />
      </div>
      <div className="flex-1 space-y-5 p-5">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
