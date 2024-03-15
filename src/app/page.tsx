import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h3>I am a Home</h3>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  )
}
