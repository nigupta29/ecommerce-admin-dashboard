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
      className="whitespace-nowrap px-6 py-4 font-medium text-stone-900 dark:text-white"
    >
      {children}
    </th>
  )
}
