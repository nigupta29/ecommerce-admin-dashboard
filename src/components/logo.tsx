import { BiCart } from "react-icons/bi"

export default function Logo() {
  return (
    <div className="flex w-full flex-col justify-end rounded-lg bg-green-500 p-8 text-white md:h-56 dark:bg-green-800">
      <div className="flex items-end justify-center space-x-4">
        <BiCart size={46} />
        <h3 className="text-4xl font-bold">Ecomm.</h3>
      </div>
    </div>
  )
}
