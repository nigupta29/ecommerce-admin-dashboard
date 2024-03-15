export default function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-stone-50 text-xs uppercase text-stone-700 dark:bg-stone-700 dark:text-stone-400">
      <tr>{children}</tr>
    </thead>
  )
}
