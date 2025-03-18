import React from 'react'
import { BookOpen, Calendar, MapPin, GraduationCap, Code, Server } from 'lucide-react'

export default function Education() {
  const educationHistory = [
    {
      degree: 'High School',
      institution: 'M.P Board',
      location: 'Bhopal',
      year: '2015',
      description: 'Established strong academic foundation.',
      icon: <BookOpen size={24} />,
      color: 'amber'
    },
    {
      degree: 'Higher Secondary',
      institution: 'M.P Board',
      location: 'Bhopal',
      year: '2017',
      description: 'Completed with focus on science and mathematics.',
      icon: <BookOpen size={24} />,
      color: 'green'
    },
    {
      degree: 'Bachelor of Science',
      institution: 'Barkatullah University',
      location: 'Bhopal',
      year: 'March 2021',
      description: 'Focused on core scientific principles and analytical thinking.',
      icon: <GraduationCap size={24} />,
      color: 'blue'
    },
    {
      degree: 'PG Diploma in Advanced Computing (PGDAC)',
      institution: 'MCNUJC',
      location: 'Bhopal',
      year: '2022',
      description: 'Specialized training in advanced computing concepts including Data Structures, Algorithms, Web Technologies, and Software Development.',
      icon: <Server size={24} />,
      color: 'indigo'
    },
    {
      degree: 'Web Development Certification',
      institution: 'The Prime Staps',
      location: 'Indore',
      year: '2024',
      description: 'Comprehensive training in modern web development technologies including HTML5, CSS3, JavaScript, React, and responsive design principles.',
      icon: <Code size={24} />,
      color: 'purple'
    },
  ];

  // Function to get color classes based on category color
  const getColorClasses = (color) => {
    switch(color) {
      case 'blue':
        return {
          bg: 'bg-blue-600',
          light: 'bg-blue-50',
          text: 'text-blue-600',
          border: 'border-blue-200',
          timeline: 'border-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-600',
          light: 'bg-green-50',
          text: 'text-green-600',
          border: 'border-green-200',
          timeline: 'border-green-600'
        };
      case 'amber':
        return {
          bg: 'bg-amber-600',
          light: 'bg-amber-50',
          text: 'text-amber-600',
          border: 'border-amber-200',
          timeline: 'border-amber-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-600',
          light: 'bg-purple-50',
          text: 'text-purple-600',
          border: 'border-purple-200',
          timeline: 'border-purple-600'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-600',
          light: 'bg-indigo-50',
          text: 'text-indigo-600',
          border: 'border-indigo-200',
          timeline: 'border-indigo-600'
        };
      default:
        return {
          bg: 'bg-gray-600',
          light: 'bg-gray-50',
          text: 'text-gray-600',
          border: 'border-gray-200',
          timeline: 'border-gray-600'
        };
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">EDUCATION</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationHistory.map((education, index) => {
              const colorClasses = getColorClasses(education.color);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 w-5 h-5 rounded-full ${colorClasses.bg} border-4 border-white transform -translate-x-1/2 z-10`}></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${colorClasses.border} hover:shadow-lg transition-shadow duration-300`}>
                      {/* Year badge */}
                      <div className="flex justify-between items-center mb-4">
                        <div className={`${colorClasses.light} ${colorClasses.text} py-1 px-3 rounded-full flex items-center text-sm font-medium`}>
                          <Calendar size={16} className="mr-1" />
                          {education.year}
                        </div>
                        <div className={`${colorClasses.bg} p-2 rounded-full text-white`}>
                          {education.icon}
                        </div>
                      </div>
                      
                      {/* Degree */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{education.degree}</h3>
                      
                      {/* Institution and Location */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center text-gray-600">
                          <BookOpen size={18} className="mr-2 text-gray-500" />
                          <span>{education.institution}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={18} className="mr-2 text-gray-500" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 mt-2 text-sm">{education.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}