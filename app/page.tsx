import Image from "next/image";
import Header from "./components/layouts/header";
import Hero from "./components/layouts/hero";
import Foot from "./components/layouts/foot";

export default function Home() {
  return (
    <section className="bg-background w-screen">
      <Header />
      <Hero />
      <Foot />
    </section>
  );
}
