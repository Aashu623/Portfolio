import React ,{useContext,useEffect,useRef}from 'react';
import './intro.css';
import { GitHub, Instagram, Linkedin } from 'react-feather';
import boy from '../../img/myPic.jpg';
import ScrollingContext from '../ScrollingContext';
import Aos from 'aos';
import 'aos/dist/aos.css';
import resume from '../Intro/ResumeUpdated.pdf';
import Typed from 'typed.js';
const Intro=()=> {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web developer', 'Programmer','Web developer', 'Programmer','Web developer', 'Programmer','Web developer', 'Programmer','Web developer', 'Programmer','Web developer', 'Programmer','Web developer', 'Programmer','Web developer', 'Programmer'],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);
    
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const { introRef } = useContext(ScrollingContext)
  
  return (
    <div ref={introRef} className='i-container'>
      <div className="line"></div>
      <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
              <div className='heading-div'>
                <span className='heading' data-aos='fade-right'>Hi! I am</span>
                <div className='dynamic-text'>
                  <span className='text' ref={el}></span>
                </div>
              </div>
              <div className='about-div'>
                <span className='about' data-aos='fade-up'>Frontend Developer with high level of skill in web designing and development, producting the Quality work.</span>
              </div>
            </div>
            <a  href={resume} download data-aos='fade-up'className='button'>Download CV</a>
            <div data-aos='fade-up' className='i-icons' >
              <a className='icon' href="https://github.com/Aashu623" target='blank'><GitHub color='orange'/></a>
              <a className='icon' href="https://www.linkedin.com/in/aashish-kushwah-78367424b/" target='blank'><Linkedin color='orange'/></a>
              <a className='icon' href="https://www.instagram.com/heart_hacker_ashu623/" target='blank'><Instagram color='orange'/></a>            
            </div>
        </div>
        <div className='i-right'><img data-aos='fade-left' src={boy} alt="" className='img'/></div>
      </div>
    </div>
  )
}

export default Intro;