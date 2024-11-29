import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1>DEEPAK VISHWAKARMA</h1>
            <h2>FRONTEND DEVOLOPER</h2>
            <p>Transforming ideas into elegant digital solutions with passion and precision.</p>
            
            <div className='hero-cta'>
              <Link to="/Contect" className='btn-primary'>RESUME</Link>
              <Link to="/Project" className='btn-secondary'>VIEW PROJECTS</Link>
            </div>
          </div>
          
          <div className='hero-image'>
            <div className='image-placeholder'></div>
          </div>
        </div>
      </div>

      <div className='skills-preview'>
        <h3>MY CORE SKILLS</h3>
        <div className='skills-grid'>
          <div className='skill-item'>REACT</div>
          <div className='skill-item'>JAVASCRIPT</div>
          <div className='skill-item'>TALWIND CSS</div>
          <div className='skill-item'>BOOTSTRAP</div>
          <div className='skill-item'>CSS</div>
          <div className='skill-item'>HTML</div>
        </div>
      </div>

      <div className='about-section'>
        <h3>ABOUT ME</h3>
        <p>
          A passionate developer with a keen eye for creating responsive and 
          user-friendly web applications. I blend creativity with technical expertise 
          to deliver innovative solutions that exceed expectations.
        </p>
      </div>

      <div className='recent-projects'>
        <h3>RECENT PROJECTS</h3>
        <div className='projects-grid'>
          {/* <div className='project-card'>
            <h4>E-COMMERCE PLATFORM</h4>
            <p>Full-stack web application with modern features</p>
            <div className='project-tags'>
              <span>REACT</span>
              <span>NODE.JS</span>
            </div>
          </div>
          <div className='project-card'>
            <h4>TASK MANAGEMENT APP</h4>
            <p>Collaborative productivity tool</p>
            <div className='project-tags'>
              <span>REDUX</span>
              <span>FIREBASE</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}