import React, {useEffect}from 'react'
import './footer.css'
import Wave from '../../img/wave.png';
import { Facebook, GitHub, Instagram } from 'react-feather';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='footer'>
        <img src={Wave} alt="img" style={{width:"100%",height:"300px"}} />
        <div className='f-content'>
            <span data-aos='zoom-in'>aashukushwah53678@gmail.com</span>
            <div className='f-icons'>
              <a href="https://www.instagram.com/heart_hacker_ashu623/" target='blank'><Instagram size='2rem' color='black'/></a>
              <a href="https://www.facebook.com/aashu623" target='blank'><Facebook size='2rem' color='black'/></a>
              <a href="https://github.com/Aashu623" target='blank'><GitHub size='2rem' color='black'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer;