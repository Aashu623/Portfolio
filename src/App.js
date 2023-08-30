import './App.css';
import {useState} from 'react'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import TechUse from './Components/TechUse/TechUse';
import ScrollingContext from './Components/ScrollingContext';
import { useRef,useEffect} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  
  const introRef = useRef(null)
  const projectsRef = useRef(null);
  const techRef = useRef(null);
  const contactRef = useRef(null);
  const [colorChange,setColorChange] = useState(false);

  useEffect(()=>{
     Aos.init({duration:2000})
   },[])

  const changeNavbarColor = (()=>{
    if(window.screenX>=80){
      setColorChange(true)
    }
    else{
      setColorChange(false)
    }
  })
  window.addEventListener('scroll',changeNavbarColor)
  return (
    <ScrollingContext.Provider value={{ introRef, projectsRef, techRef, contactRef }} >
      <Navbar colorChange = {colorChange}/>
      <div data-aos='fade-up'className="App">
        <Intro />
        <TechUse />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ScrollingContext.Provider>
  );
}

export default App;
