import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Code, Briefcase, User } from "lucide-react";
import myimage from "./Media/deepak.png"

export default function Home() {
  

  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Hero Text */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                DEEPAK VISHWAKARMA
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-200">
              FULL STACK DEVELOPER
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                Transforming ideas into elegant digital solutions with passion
                and precision.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/Resume"
                  className="bg-white text-blue-700 hover:bg-blue-50 transition duration-300 font-semibold py-3 px-6 rounded-md shadow-md flex items-center gap-2"
                >
                  <Download size={18} />
                  RESUME
                </Link>

              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-blue-800 rounded-lg border-4 border-blue-300 shadow-xl h-64 md:h-[27rem] flex items-center justify-center">
                  <img className="h-full w-full" src={myimage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
          <Code size={24} className="text-blue-600" />
          MY CORE SKILLS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer border-b-4 border-blue-500">
            <span className="font-semibold text-gray-800">REACT</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer border-b-4 border-yellow-500">
            <span className="font-semibold text-gray-800">JAVASCRIPT</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer border-b-4 border-cyan-500">
            <span className="font-semibold text-gray-800">TAILWIND CSS</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer border-b-4 border-purple-500">
            <span className="font-semibold text-gray-800">BOOTSTRAP</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer border-b-4 border-blue-400">
            <span className="font-semibold text-gray-800">CSS</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer border-b-4 border-orange-500">
            <span className="font-semibold text-gray-800">HTML</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
            <User size={24} className="text-blue-600" />
            ABOUT ME
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center leading-relaxed">
            A passionate developer with a keen eye for creating responsive and
            user-friendly web applications. I blend creativity with technical
            expertise to deliver innovative solutions that exceed expectations.
          </p>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
          <Briefcase size={24} className="text-blue-600" />
          RECENT PROJECTS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Code size={48} className="text-white" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                E-COMMERCE PLATFORM
              </h4>
              <p className="text-gray-600 mb-4">
                Full-stack web application with modern features
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  REACT
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  NODE.JS
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Briefcase size={48} className="text-white" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                TASK MANAGEMENT APP
              </h4>
              <p className="text-gray-600 mb-4">
                Collaborative productivity tool
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  REDUX
                </span>
                <span className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  FIREBASE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="flex justify-center items-center text-6xl text-red-600 pb-[2rem] font-bold  bg-red-200">
        <h1>hello my friend</h1>
        </div>

    </div>
  );
}
