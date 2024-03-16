function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-auto rounded-lg shadow">
      <table className="w-full text-left text-sm text-stone-500 dark:text-stone-400">
        {children}
      </table>
    </div>
  )
}

function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-stone-200 text-xs uppercase text-stone-700 dark:bg-stone-700 dark:text-stone-400">
      <tr>{children}</tr>
    </thead>
  )
}

function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>
}

function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="border-b odd:bg-white even:bg-stone-50 dark:border-stone-700 odd:dark:bg-stone-900 even:dark:bg-stone-800">
      {children}
    </tr>
  )
}

function TableHeading({
  children,
  scope = "col"
}: {
  children: React.ReactNode
  scope?: "col" | "row"
}) {
  return (
    <th
      scope={scope}
      className="whitespace-nowrap px-6 py-4 font-semibold text-stone-800 dark:text-stone-100"
    >
      {children}
    </th>
  )
}

function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-6 py-4">{children}</td>
}

export { Table, TableHead, TableBody, TableRow, TableHeading, TableCell }
