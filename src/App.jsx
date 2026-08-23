import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import StickMan from "./components/Stickman/Stickman";

export default function App() {
  return(
    <>
      <Navigation />
      <Home />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <StickMan />
    </>
  )
}