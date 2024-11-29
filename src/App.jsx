import React from 'react'
import Navigation from './Component/Navigation'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Education from './Pages/Education'

export default function App() {
  return (
    <div>


        <BrowserRouter>
        
            <Navigation/>

        <Routes>
        
              <Route path ="/" element = {<Home/>}/>
              <Route path ="/Projects" element ={<Projects/>}/>
              <Route path ="/Skills" element ={<Skills/>}/>
              <Route path ="/Contact" element ={<Contact/>}/>
              <Route path ="/Education" element ={<Education/>}/>      

        </Routes>   

        </BrowserRouter>
      
      
    </div>
  )
}
