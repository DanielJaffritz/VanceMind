import Link from "next/link";

export default function Verification() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Please verify your email before sign in</h1>
      <Link href="/dashboard"></Link>
      <p>Did not received an email? <button className="text-accent">resend here</button></p>
    </div>
  )
}
