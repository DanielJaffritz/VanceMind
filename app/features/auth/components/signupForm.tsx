'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SignUpForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleRegister(values: SingupValues) {
    const res = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    if (res.error) {
      setError(res.error.message || "something went wrong");
    } else {
      router.push("/sign-up/verification")
    }
  }

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!formData) return;
    const values: SingupValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string
    }
    handleRegister(values)
    console.log(values)

  }
  async function handleRegisterWithGoogle() {
    const data = await authClient.signIn.social({
      provider: "google"
    })
  }
  return (
    <div className="bg-light_background flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-10">
        <div className="flex flex-row items-center justify-center grow">
          <img src="appLogo.png" className="w-1/16" />
          <h2 className="text-foreground font-semibold text-3xl">VanceMind</h2>
        </div>
        <h1 className="text-6xl font-semibold text-foreground" >Sign Up</h1>
        <button onClick={handleRegisterWithGoogle} className="border-2 border-button rounded-4xl p-2 w-full flex flex-row items-center mt-5 cursor-pointer hover:bg-button transition-all">
          <img src="google.svg" className="w-8" />
          <label className="w-1/2 mx-auto text-foreground">Sign up with google</label>
        </button>
      </div>
      <hr className="bg-red-200 w-3/4" />
      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-15">
          <input name="name" type="text" placeholder="Name" className=" border-2 border-button rounded-2xl p-3 text-foreground outline-none" />
          <input name="email" type="text" placeholder="email" className="border-2 border-button rounded-2xl p-3 text-foreground outline-none" />
          <input name="password" type="text" placeholder="password" className="border-2 border-button rounded-2xl p-3 text-foreground outline-none" />
          <button type="submit" className="rounded-4xl bg-button text-foreground p-4 cursor-pointer hover:bg-accent transition-all">Sign Up</button>
          {error && <p className="text-foreground">{error}</p>}
        </form>
        <Link href="/login">Already have an account?</Link>
      </div>
    </div>
  )
}
