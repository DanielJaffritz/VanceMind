import Decorator from "../features/auth/components/Decorator";
import LoginForm from "../features/auth/components/loginForm";

export default function Login() {
  return (
    <section className="flex flex-row w-screen h-screen">
      <Decorator />
      <LoginForm />
    </section>

  )
}
