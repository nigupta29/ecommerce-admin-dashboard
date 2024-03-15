import DashboardCard from "@/components/dashboard/card"
import TransactionsTable from "@/components/dashboard/transactions/transactions-table"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        <div className="col-span-2 lg:col-span-1">
          <DashboardCard />
        </div>
        <DashboardCard />
        <DashboardCard />
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold text-stone-600 dark:text-stone-300">
          Latest Transactions
        </h3>
        <TransactionsTable />
      </section>
    </div>
  )
}
