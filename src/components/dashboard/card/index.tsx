import { FaUsers } from "react-icons/fa"

export default function DashboardCard() {
  return (
    <div className="flex w-full flex-col rounded-lg bg-stone-100 px-4 py-3 shadow hover:shadow-md dark:bg-stone-900/50">
      <div className="mb-2 w-fit rounded-full bg-stone-200 p-2 text-3xl text-green-500 dark:bg-stone-700">
        <FaUsers />
      </div>
      <h3 className="text-xl font-semibold">Rs. 25168</h3>
      <p className="text-sm text-stone-400">Total Users</p>
    </div>
  )
}
