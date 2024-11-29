import React from 'react'
import "./Skills.css"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "REACT", level: 90 },
        { name: "JAVASCRIPT", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "TAILWIND CSS", level: 80 },
        { name: "BOOTSTRAP", level: 75 }
      ]
    },
    {
      category: "Design Tools",
      skills: [
        { name: "FIGMA", level: 70 },
        { name: "ADOBE XD", level: 60 },
        { name: "PHOTOSHOP", level: 50 }
      ]
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "GIT", level: 75 },
        { name: "GITHUB", level: 80 },
        { name: "RESPONSIVE DESIGN", level: 90 }
      ]
    }
  ];

  return (
    <div className='skills-container'>
      <div className='skills-header'>
        <h1>MY SKILLS</h1>
        <p>Exploring the technologies that drive my passion for web development</p>
      </div>

      <div className='skills-content'>
        {skillCategories.map((category, index) => (
          <div key={index} className='skill-category'>
            <h3>{category.category}</h3>
            <div className='skills-grid'>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className='skill-card'>
                  <div className='skill-info'>
                    <span className='skill-name'>{skill.name}</span>
                    <span className='skill-percentage'>{skill.level}%</span>
                  </div>
                  <div className='skill-progress'>
                    <div 
                      className='skill-progress-bar' 
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
