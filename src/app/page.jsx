import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="App">
      <main className="Main">
        <Hero />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
