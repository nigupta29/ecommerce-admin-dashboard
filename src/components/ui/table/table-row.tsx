export default function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="border-b odd:bg-white even:bg-stone-50 dark:border-stone-700 odd:dark:bg-stone-900 even:dark:bg-stone-800">
      {children}
    </tr>
  )
}
