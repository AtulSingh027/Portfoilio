import React from 'react'
import { Code, Palette, Briefcase, Server, Database } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      icon: <Code size={24} />,
      color: "blue",
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
      category: "MERN Stack",
      icon: <Database size={24} />,
      color: "amber",
      skills: [
        { name: "MONGODB", level: 80 },
        { name: "EXPRESS.JS", level: 75 },
        { name: "REACT", level: 90 },
        { name: "NODE.JS", level: 85 }
      ]
    },
    {
      category: "Backend Technologies",
      icon: <Server size={24} />,
      color: "red",
      skills: [
        { name: "NODE.JS", level: 85 },
        { name: "EXPRESS.JS", level: 75 },
        { name: "REST API", level: 80 },
        { name: "MONGODB", level: 80 }
      ]
    },
    {
      category: "Design Tools",
      icon: <Palette size={24} />,
      color: "purple",
      skills: [
        { name: "FIGMA", level: 70 },
        { name: "ADOBE XD", level: 60 },
        { name: "PHOTOSHOP", level: 50 }
      ]
    },
    {
      category: "Other Technologies",
      icon: <Briefcase size={24} />,
      color: "green",
      skills: [
        { name: "GIT", level: 75 },
        { name: "GITHUB", level: 80 },
        { name: "RESPONSIVE DESIGN", level: 90 }
      ]
    }
  ];

  // Function to get color classes based on category color
  const getColorClasses = (color) => {
    switch(color) {
      case 'blue':
        return {
          bg: 'bg-blue-600',
          light: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-300',
          progressBg: 'bg-blue-100',
          progressFill: 'bg-blue-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-600',
          light: 'bg-purple-100',
          text: 'text-purple-600',
          border: 'border-purple-300',
          progressBg: 'bg-purple-100',
          progressFill: 'bg-purple-600'
        };
      case 'green':
        return {
          bg: 'bg-green-600',
          light: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-300',
          progressBg: 'bg-green-100',
          progressFill: 'bg-green-600'
        };
      case 'red':
        return {
          bg: 'bg-red-600',
          light: 'bg-red-100',
          text: 'text-red-600',
          border: 'border-red-300',
          progressBg: 'bg-red-100',
          progressFill: 'bg-red-600'
        };
      case 'amber':
        return {
          bg: 'bg-amber-600',
          light: 'bg-amber-100',
          text: 'text-amber-600',
          border: 'border-amber-300',
          progressBg: 'bg-amber-100',
          progressFill: 'bg-amber-600'
        };
      default:
        return {
          bg: 'bg-gray-600',
          light: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-300',
          progressBg: 'bg-gray-100',
          progressFill: 'bg-gray-600'
        };
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">MY SKILLS</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring the technologies that drive my passion for web development
          </p>
        </div>

        {/* Skills Content */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-8">
                  <div className={`${colorClasses.bg} p-3 rounded-lg mr-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={`border ${colorClasses.border} rounded-lg p-4 hover:shadow-md transition duration-300`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <span className={`${colorClasses.text} font-bold`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 ${colorClasses.progressBg} rounded-full overflow-hidden`}>
                        <div 
                          className={`h-full ${colorClasses.progressFill} rounded-full transition-all duration-1000 ease-in-out`} 
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}