import { CgSearch } from "react-icons/cg"

export default function Search() {
  return (
    <div className="w-28 md:w-44">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 flex items-center ps-3">
          <CgSearch />
        </div>

        <input
          type="text"
          id="search"
          className="w-full rounded-lg border border-stone-300 bg-stone-50 p-2 ps-10 text-sm text-stone-900 focus-within:outline-none focus:border-green-500 focus:ring-green-500 dark:border-stone-600 dark:bg-stone-700 dark:text-white dark:placeholder-stone-400 dark:focus:border-green-500 dark:focus:ring-green-500"
          placeholder="Search"
          autoComplete="off"
        />
      </div>
    </div>
  )
}
