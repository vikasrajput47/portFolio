import React from 'react'
import react from './img/react.png'
import web from './img/web.png'
import pro from './img/pro.png'
import materialUI from './img/materialUI.png'
import './Projects.css'
const Projects = () => {
  return (
    <div>
      <div className="firstContainer slide-out">
        <div className="first1">
          <img src={pro} alt="" />
        </div>
        <div className="first2">
          <p className="project1">
            Projects
          </p>
          <p className="project2">
          I love to create project as it give me the oportunity to learn new technology and help me in exploring new technologies
          </p>
        </div>
      </div>
      <div className="secondContainer" data-aos="zoom-in" >
        <div className="second1" >
          <div className="second1a">
            <p className="second1apara1">
            &#x270D; Gym Website
            </p>
            <p className="second1apara2">
            Created a responsice website <a  style={{textDecoration:'underline'}} href="https://btech-gym-wala.netlify.app/" target='_blank' rel="noreferrer">Btech-Gym-Wala</a>
            </p>
          </div>
          <div className="second1b">
            <div className="second1bpara1">
              Created on 3rd July 2023
            </div>
            <div className="second1bpara2">
              <img src={react} alt="" />
            </div>
          </div>
        </div>
        <div className="second1">
          <div className="second1a">
            <p className="second1apara1">
            &#x270D; Weather wallah
            </p>
            <p className="second1apara2">
            Created a weather finding app <a  style={{textDecoration:'underline'}} href="https://vikas-weather-wallah.netlify.app/" target='_blank'  rel="noreferrer">Weather-wallah</a>
            </p>
          </div>
          <div className="second1b">
            <div className="second1bpara1">
              Created on 12th April 2023
            </div>
            <div className="second1bpara2">
              <img src={web} alt="" />
            </div>
          </div>
        </div>
        <div className="second1">
          <div className="second1a">
            <p className="second1apara1">
            &#x270D; Youtube Clone
            </p>
            <p className="second1apara2">
            Created a simple clone web app <a style={{textDecoration:'underline'}} href="https://vikas-youtubeclone.netlify.app/" target='_blank'  rel="noreferrer">youtubeClone</a>
            </p>
          </div>
          <div className="second1b">
            <div className="second1bpara1">
              Created on 23rd July 2023
            </div>
            <div className="second1bpara2">
              <img src={materialUI} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
