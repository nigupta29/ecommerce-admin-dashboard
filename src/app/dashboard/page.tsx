import DashboardCard from "@/components/dashboard/card"

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-stone-600 dark:text-stone-300">
          Latest Transactions
        </h3>
      </section>
    </div>
  )
}
