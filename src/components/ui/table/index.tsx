export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto max-w-6xl overflow-x-auto rounded-lg shadow">
      <table className="w-full text-left text-sm text-stone-500 dark:text-stone-400">
        {children}
      </table>
    </div>
  )
}
