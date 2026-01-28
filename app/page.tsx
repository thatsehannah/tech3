import {
  About,
  Contact,
  Experience,
  Hero,
  Services,
  TechStack,
} from "@/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  );
}
