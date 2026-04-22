import Decorator from "../features/auth/components/Decorator";
import SignUpForm from "../features/auth/components/signupForm";

export default function SignUp() {
  return (
    <section className="flex flex-row w-screen h-screen">
      <Decorator />
      <SignUpForm />
    </section>
  )
}
