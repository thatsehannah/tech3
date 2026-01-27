import { About, Experience, Hero, Services } from "@/sections";
import { TechStack } from "@/sections/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Experience />
      <TechStack />
    </main>
  );
}
