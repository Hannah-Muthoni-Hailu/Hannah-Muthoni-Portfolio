import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import StickMan from "./components/Stickman/Stickman";
import About from './components/About';
import Marquee from './components/Marque';

export default function App() {
  return(
    <>
      <div className="hero-grid" />
      <Navigation />

    <section id="home">
      <Hero />
    </section>
    
    <section id="about">
      <About />
    </section>
    
    <Marquee />
    
    <section id="projects">
      <Projects />
    </section>
    
    <section id="contact">
      <Contact />
    </section>
      {/* <Footer /> */}
      <StickMan />
    </>
  )
}
