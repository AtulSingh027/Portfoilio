import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='main-navigation'>
      
        <div className='brand-container'>
            <h1>Logo</h1>
        </div>

        <div className='navigation-menu'>

            <ul className='navigation-links'>
                <li><Link to ="/" >HOME</Link></li>
                <li><Link to ="/Project">PROJECTS</Link></li>
                <li><Link to ="/Skills">SKILLS</Link></li>
                <li><Link to ="/Contact">CONTACT</Link></li>
                <li><Link to ="/Education">EDUCATION</Link></li>
            </ul>

        </div>
    </div>
  ) 
}