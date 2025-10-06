import Link from "next/link";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <section>
      <Hero/>
      <Plans/>
      <Testimonials/>
    </section>
  );
}
