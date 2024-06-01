import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Title from './components/Title';
import Pictorial from './components/Pictorial';
import Directors from './components/Directors';
import './App.css'
import Contact from './components/Contact';
import Programs from './components/Programs';


const App = () => {
  

  return (
    
    <React.StrictMode>       
          <div className='applic'>
          <Navbar/>
          <Hero/>
  
          <div className='container'>
            <Title subTitle='WITH YOU ALONG THE JOURNEY' title='Problem Statement ' title1='Problem Justification' title2='The Conclusion' title3='Cerification'/>
            <About/>   
                   
            
          </div>

          <Programs/>
          <Directors/>  
          <Pictorial/>    
          <Contact subTitle='Get in Touch' title='Contact Us'/>    
           
  
        </div>
  
        
  
      
    </React.StrictMode>

  )
}

export default App
