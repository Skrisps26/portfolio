import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />

      <footer style={{
        padding: '2rem 0',
        textAlign: 'center',
        borderTop: '2px solid black',
        background: 'var(--foreground)',
        color: 'var(--background)',
        fontFamily: 'var(--font-geist-mono)',
        marginTop: '0'
      }}>
        <div className="container" style={{ border: 'none', minHeight: 'auto' }}>
          &copy; {new Date().getFullYear()} SAI KRISHNA // ENGINEER.
        </div>
      </footer>
    </main>
  );
}
