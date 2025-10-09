import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="App">
      <main className="Main">
      <Hero />
      <Projects />
      </main>
    </div>
  );
}
