import React from 'react'
import { User, GraduationCap, Briefcase, Code, FolderOpen, FileText, Phone, Mail, MapPin, Calendar, Download, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Resume() {
  const resumeSections = [
    {
      title: "Professional Summary",
      icon: <User size={20} />,
      content: "A dedicated and detail-oriented Software Developer with a strong foundation in programming languages and web development technologies. Proven ability to manage data effectively and deliver high-quality software solutions. Seeking to leverage skills in a challenging role."
    },
    {
      title: "Education",
      icon: <GraduationCap size={20} />,
      items: [
        { title: "Bachelor's in Technology", institution: "Devi Ahilya Vishwavidyalaya, Bhopal", date: "March 2026" },
        { title: "Higher Secondary", institution: "M.P Board, Bhopal", date: "2022" },
        { title: "High School", institution: "M.P Board, Bhopal", date: "2020" }
      ]
    },
    {
      title: "Experience",
      icon: <Briefcase size={20} />,
      items: [
        {
          title: "Software Developer",
          date: "Jan 2024 - Present",
          responsibilities: [
            "Strengthened problem-solving skills by solving 200+ DSA challenges, focusing on optimization and efficiency.",
            "Architected and applied full-stack development skills in projects like Kisan Track, showcasing practical problem-Solving in agriculture.",
            "Gained expertise in Django+NodeJS, SQL, React, Tailwind CSS, and front-end technologies to build responsive and dynamic web applications.",
          ]
        }
      ]
    },
    {
      title: "Skills & Abilities",
      icon: <Code size={20} />,
      categories: [
        {
          name: "Ptogramming Languages",
          skills: ["C", "C++", "Python", "JavaScript"]
        },
        {
          name: "Software Skills",
          skills: ["Deployment", "Data management", "Computer operations management"]
        },
        {
          name: "Frontend Technologies",
          skills: ["React JS","TypeScript","JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
        },
        {
          name: "Backend Development",
          skills: ["Django", "Django Rest Framework","NodeJs","Express","MongoDB","SQL","REST API","Microservices"]
        },
        {
          name: "Developer Tools",
          skills: ["VS Code", "Postman", "AWS", "Docker", "Git", "GitHub"]
        }
      ]
    },
    {
      title: "Projects",
      icon: <FolderOpen size={20} />,
      items: [
        { 
          title: "Social Media App",
          link: "#",
          description: "A full-stack social media application with user authentication, post creation, and real-time updates." 
        },
        { 
          title: "Edusoul",
          link: "#",
          description: "An educational platform for online learning with course management and user interaction features."
        },
        { 
          title: "Hospital Management System",
          link: "#",
          description: "A comprehensive solution for hospital record management."
        }
      ]
    },
    {
      title: "Personal Details",
      icon: <FileText size={20} />,
      details: [
        { label: "Date of Birth", value: "13/10/2006", icon: <Calendar size={16} /> },
        { label: "Marital Status", value: "Single", icon: <User size={16} /> },
        { label: "Nationality", value: "Indian", icon: <FileText size={16} /> },
        { label: "Gender", value: "Male", icon: <User size={16} /> }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header/Contact Info */}
        <motion.div 
          className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8 border border-gray-700 relative overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
          
          <h1 className="text-4xl font-bold text-center text-white mb-4">ATUL THAKUR</h1>
          <p className="text-center text-blue-400 font-medium mb-6">Full Stack Developer</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300 text-sm mb-6">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1 text-blue-400" />
              <span>Indore, (M.P) 452011</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-1 text-blue-400" />
              <span>+91 84xxxxxx90</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-1 text-blue-400" />
              <span>atulthakur5103@gmail.com</span>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="flex justify-center mt-6">
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 px-6 rounded-md flex items-center transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </motion.button>
          </div>
        </motion.div>
        
        {/* Resume Content */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {resumeSections.map((section, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700"
              variants={itemVariants}
            >
              <div className="flex items-center border-b border-gray-700 pb-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-2 rounded-md text-white mr-3 shadow-lg">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              
              {/* Professional Summary */}
              {section.content && (
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {section.content}
                </motion.p>
              )}
              
              {/* Education */}
              {section.items && !section.responsibilities && !section.description && (
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="relative pl-6"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                    >
                      <div className="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="font-medium text-white">{item.title}</div>
                      {item.institution && (
                        <div className="flex justify-between text-sm text-gray-400 mt-1">
                          <span>{item.institution}</span>
                          {item.date && <span className="text-blue-400">{item.date}</span>}
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              )}
              
              {/* Experience */}
              {section.items && section.items[0].responsibilities && (
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-blue-400">{item.date}</span>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        {item.responsibilities.map((resp, respIdx) => (
                          <motion.li 
                            key={respIdx} 
                            className="relative pl-6"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (respIdx * 0.1) }}
                          >
                            <div className="absolute left-0 top-2 w-1 h-1 bg-blue-400 rounded-full"></div>
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Skills */}
              {section.categories && (
                <div className="space-y-6">
                  {section.categories.map((category, catIdx) => (
                    <motion.div 
                      key={catIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (catIdx * 0.1) }}
                    >
                      <h3 className="text-gray-200 font-medium mb-3">{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIdx) => (
                          <motion.span 
                            key={skillIdx} 
                            className="bg-gray-700 text-blue-300 px-3 py-1 rounded-md text-sm border border-gray-600 hover:bg-gray-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + (skillIdx * 0.05) }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {/* Projects */}
              {section.items && section.items[0].description && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIdx) => (
                    <motion.div 
                      key={itemIdx}
                      className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (itemIdx * 0.1) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-white">{item.title}</h3>
                        {item.link && (
                          <a href={item.link} className="text-blue-400 hover:text-blue-300">
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {/* Personal Details */}
              {section.details && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.details.map((detail, detailIdx) => (
                    <motion.div 
                      key={detailIdx} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (detailIdx * 0.1) }}
                    >
                      <div className="text-blue-400 mr-2">
                        {detail.icon}
                      </div>
                      <span className="text-gray-200 font-medium mr-2">{detail.label}:</span>
                      <span className="text-gray-300">{detail.value}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}