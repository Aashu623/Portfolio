import React,{useContext,useEffect} from 'react'
import  './TechUse.css'
import cpp from '../../img/cpp.png'
import c from '../../img/c.png'
import nodejs from '../../img/nodejs.png'
import python from '../../img/python.png'
import coding from '../../img/coding.png'
import react from '../../img/react.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import mongodb from '../../img/mongobd.png'
import ScrollingContext from '../ScrollingContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

function TechUse() {
    const { techRef } = useContext(ScrollingContext)
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
    const skills = [
        {
            id:1,
            img:c
        },
        {
            id:2,
            img:mongodb
        },
        {
            id:3,
            img:python
        },
        {
            id:4,
            img:html
        },
        {
            id:5,
            img:cpp
        },
        {
            id:6,
            img:nodejs
        },
        {
            id:7,
            img:react
        },
        {
            id:8,
            img:css
        }
    ]
  return (
    <div ref={techRef} className='t-container'>
        <div className='line'></div>
        <div className='tech'>
        <div className='t-right'>
                <div data-aos='zoom-in' className='mainCircle'>
                    <div className='secCircle'>
                        <img src={coding} alt="" />
                    </div>
                    <div className='secCircle'>
                        <img src={cpp} alt="" />
                    </div>
                    <div className='secCircle'>
                        <img src={python} alt="" />
                    </div>
                    <div className='secCircle'>
                        <img src={react} alt="" />
                    </div>
                    <div className='secCircle'>
                        <img src={nodejs} alt="" />
                    </div>
                </div>
            </div>
            <div className='t-left'>
                <span data-aos='fade-right'>Tech Use</span>
                <span data-aos='fade-left'>By Aashish</span>
                <span data-aos='fade-up' className='disc'>Work on modern technologies like React, Node.js, Express.js</span>
                <div data-aos='fade-up' className='skills'>
                    {skills.map((skill)=>{
                        return (
                        <img data-aos='zoom-in' key={skill.id} className='rotateimg' src={skill.img} alt='img'/> 
                        )
                    })}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default TechUse