import React from 'react'
import { User, GraduationCap, Briefcase, Code, FolderOpen, FileText, Phone, Mail, MapPin, Calendar } from 'lucide-react'

export default function Resume() {
  const resumeSections = [
    {
      title: "Professional Summary",
      icon: <User size={20} />,
      content: "Adept Computer Operator with a proven track record at Management, where I enhanced data quality through meticulous data entry, achieving a significant improvement in data accuracy. Skilled in React js and customer service, I excel in managing complex data systems and responding efficiently to service requests, demonstrating both technical proficiency and exceptional interpersonal abilities."
    },
    {
      title: "Education",
      icon: <GraduationCap size={20} />,
      items: [
        { title: "Bachelor of Science", institution: "Barkatullah University, Bhopal", date: "March 2021" },
        { title: "Higher Secondary", institution: "M.P Board, Bhopal", date: "2017" },
        { title: "High School", institution: "M.P Board, Bhopal", date: "2015" }
      ]
    },
    {
      title: "Experience",
      icon: <Briefcase size={20} />,
      items: [
        {
          title: "Computer Operator & Management",
          date: "03/2022 to 07/2024",
          responsibilities: [
            "Maintained a high level of accuracy in data entry tasks, resulting in improved overall data quality.",
            "Maintained spreadsheets of data across multiple systems.",
            "Generated reports covering details about data, system operation, and error monitoring.",
            "Processed requests for service from internal and external customers"
          ]
        }
      ]
    },
    {
      title: "Skills & Abilities",
      icon: <Code size={20} />,
      categories: [
        {
          name: "Software Skills",
          skills: ["Data entry", "Data management", "Computer operations management"]
        },
        {
          name: "Web Development",
          skills: ["React JS", "JavaScript", "HTML", "CSS"]
        },
        {
          name: "Full Stack Development",
          skills: ["MERN (MongoDB, Express, React, and Node.js) Stack"]
        },
        {
          name: "CSS Frameworks",
          skills: ["Tailwind CSS", "Bootstrap"]
        }
      ]
    },
    {
      title: "Projects",
      icon: <FolderOpen size={20} />,
      items: [
        { title: "E-commerce – Food Order" },
        { title: "Personal Portfolio" },
        { title: "Hospital Management System" }
      ]
    },
    {
      title: "Personal Details",
      icon: <FileText size={20} />,
      details: [
        { label: "Date of Birth", value: "02/02/1999", icon: <Calendar size={16} /> },
        { label: "Marital Status", value: "Single", icon: <User size={16} /> },
        { label: "Nationality", value: "Indian", icon: <FileText size={16} /> },
        { label: "Gender", value: "Male", icon: <User size={16} /> }
      ]
    }
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header/Contact Info */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">DEEPAK VISHWAKARMA</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-600 text-sm mb-6">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1 text-blue-600" />
              <span>Indore, (M.P) 452011</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-1 text-blue-600" />
              <span>+91 9516776127</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-1 text-blue-600" />
              <span>Vishwakarmad2337@gmail.com</span>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="flex justify-center mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center transition-colors">
              <FileText size={18} className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
        
        {/* Resume Content */}
        <div className="space-y-8">
          {resumeSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center border-b border-gray-200 pb-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-md text-white mr-3">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
              </div>
              
              {/* Professional Summary */}
              {section.content && (
                <p className="text-gray-600">{section.content}</p>
              )}
              
              {/* Education & Projects */}
              {section.items && !section.responsibilities && (
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
                      <div className="font-medium text-gray-800">{item.title}</div>
                      {item.institution && (
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{item.institution}</span>
                          {item.date && <span>{item.date}</span>}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Experience */}
              {section.items && section.items[0].responsibilities && (
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <span className="text-sm text-blue-600">{item.date}</span>
                      </div>
                      <ul className="space-y-1 text-gray-600">
                        {item.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue-600">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Skills */}
              {section.categories && (
                <div className="space-y-4">
                  {section.categories.map((category, catIdx) => (
                    <div key={catIdx}>
                      <h3 className="text-gray-700 font-medium mb-2">{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Personal Details */}
              {section.details && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.details.map((detail, detailIdx) => (
                    <div key={detailIdx} className="flex items-center">
                      <div className="text-blue-600 mr-2">
                        {detail.icon}
                      </div>
                      <span className="text-gray-700 font-medium mr-2">{detail.label}:</span>
                      <span className="text-gray-600">{detail.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}