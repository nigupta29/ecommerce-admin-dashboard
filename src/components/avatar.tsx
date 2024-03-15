import Image from "next/image"

export default function Avatar() {
  return (
    <div className="flex w-fit items-center gap-3">
      <div className="text-right">
        <h5 className="text-sm text-stone-800 dark:text-stone-200">John Doe</h5>
        <h6 className="text-xs text-stone-400">Administrator</h6>
      </div>
      <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-stone-400/20">
        <Image
          src="/profile.png"
          alt="user profile"
          fill={true}
          className="object-fill"
          sizes="300px"
        />
      </div>
    </div>
  )
}
