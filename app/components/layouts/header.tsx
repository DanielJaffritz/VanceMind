import Link from "next/link";

export default function Header() {
  return (
    <section className="p-5 md:p-15 bg-linear-to-t from-background via-degraded_1 to-degraded_2 w-screen">
      <nav className="mx-5 p-1.5 rounded-3xl flex flex-row bg-background items-center justify-between">
        <div className="flex flex-row items-center">
          <img src="appLogo.png" className="w-1/16" />
          <h2 className="text-foreground font-semibold">VanceMind</h2>
        </div>
        <Link href="/login" className="bg-button hover:bg-accent p-1.5 rounded-3xl px-5">Log In</Link>
      </nav>
      <div className="flex flex-col p-5">
        <h1 className="text-6xl text-foreground font-semibold">Vance<span className="text-accent">Mind</span></h1>
        <p className="text-foreground text-2xl">Powerful AI-assistant to appeal <br /> to your audience and communicate <br /> what you want to say</p>
        <div className="flex flex-row gap-5 mt-2 w-full">
          <Link href="/signup" className="text-2xl bg-button hover:bg-accent p-1.5 px-5 rounded-md">Get started</Link>
          <Link href="/login" className="text-2xl bg-button hover:bg-accent p-1.5 px-5 rounded-md">Log In</Link>
        </div>
      </div>
    </section >
  )
}
