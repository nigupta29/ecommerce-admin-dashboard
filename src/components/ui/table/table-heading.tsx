export default function TableHeading({
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
