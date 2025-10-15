import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";
import UnderConstruction from "./components/UnderConstruction";

export default function Home() {
  return (
    <div className="App">
      {/* <ScrollProgress /> */}
      <UnderConstruction />
      <main className="Main">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
