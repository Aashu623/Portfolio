import React, {useContext,useEffect} from 'react'
import  './projects.css';
import todoapp from '../../img/todoapp.png'
import holidayz from '../../img/holidayz.png'
import GoldsGym from '../../img/GoldsGym.png'
import landingpage from '../../img/landingpage.png'
import promanage from '../../img/promanage.png'
import calculator from '../../img/calculator.png'
import ScrollingContext from '../ScrollingContext';
import { ExternalLink, GitHub } from 'react-feather';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Projects=()=> {
  const {projectsRef} = useContext(ScrollingContext);
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const Projects = [
    {
      id:1,
      title:`Holidayz`,
      dis:`This is a full responsive home page for a travel agency.`,
      img:holidayz,
      githubLink:`https://github.com/Aashu623/Holidayz`,
      liveLink:`https://aashu623.github.io/Holidayz/`
    },
    {
      id:2,
      title:`Promanage`,
      dis:`This is a project Management tool. Users can login and manage their projects according to their needs.`,
      img:promanage,
      githubLink:`https://github.com/Aashu623/ProManage`,
      liveLink:`https://aashu623.github.io/ProManage/`
    },
    {
      id:3,
      title:`Gold's Gym Clone`,
      dis:`The design is fully responsive, ensuring seamless browsing across all devices.`,
      img:GoldsGym,
      githubLink:`https://github.com/Aashu623/GoldGymClone`,
      liveLink:`https://aashu623.github.io/GoldGymClone/`
      
    },
    {
      id:4,
      title:`ToDo App`,
      dis:`This is a simple todo application. It is very usefull to remind your daily tasks.`,
      img:todoapp,
      githubLink:`https://github.com/Aashu623/LGMVIP-Web-todo-1`,
      liveLink:`https://aashu623.github.io/LGMVIP-Web-todo-1/`
    },
    {
      id:5,
      title:`FoodGPT`,
      dis:`A beautifull responsive home page for a Food ordering website.`,
      img:landingpage,
      githubLink:`https://github.com/Aashu623/OIBSIP-LANDING_PAGE/`,
      liveLink:`https://aashu623.github.io/OIBSIP-LANDING_PAGE/`
    },
    {
      id:6,
      title:`Calculator`,
      dis:`A good looking calculator with full functionality. You can do operations like addition, substraction, multiplication and division.`,
      img:calculator,
      githubLink:`https://github.com/Aashu623/LGMVIP-Web-calculator-4`,
      liveLink:`https://aashu623.github.io/LGMVIP-Web-calculator-4/`
    }
  ]
  return (
    <div className='projects' ref={projectsRef}>
        <div className='line'></div>
        <span>Recent<span>Projects</span></span>
        <div className="inner">
        {
          Projects.map((props)=>{
            return (
              <div key={props.id}>
                  <div data-aos='flip-left' className='project'>
                    <img src={props.img} alt=''/>
                    <div className='content'>
                      <h3>{props.title}</h3>
                      <p>{props.dis}</p>
                      <div className="p-icons">
                      <a href={props.githubLink} target='blank'><GitHub size='40px'/></a>
                      <a href={props.liveLink} target='blank'><ExternalLink size='40px' /></a>
                      </div>
                    </div>
                  </div>
              </div>
            )
          })}
          </div>
    </div>
  )
}

export default Projects;