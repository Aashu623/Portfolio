import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
// import TechUse from './Components/TechUse/TechUse';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About/About';
// import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
const App = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      {/*<Education />*/}
      {/* <TechUse /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
