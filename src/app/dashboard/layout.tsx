import Navbar from "@/components/dashboard/navbar"
import Sidebar from "@/components/dashboard/sidebar"

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex">
      <div className="absolute h-screen w-[300px] bg-stone-500 md:relative">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}
