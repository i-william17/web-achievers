import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Programs.css'
import prog1 from '../assets/mission.png'
import prog2 from '../assets/values.png'
import prog3 from '../assets/affiliate-marketing.png'
import prog4 from '../assets/check.png'


// eslint-disable-next-line react/prop-types
const Programs = () => {
    useEffect(()=>{
        AOS.init({
          duration:2000});
    
      },[])


  return (
    <React.StrictMode>
        <div className="prog" data-aos='fade-left'>
            <div className='head' data-aos='fade-left'>

            <div className="slider1">
            <ul>
                <li>
                    <div className="slide1">
                    <div className="user1">
                   <img src = {prog1} alt=''/>

                    </div>
                    <div className='use1'>
                        <h3>METHODOLOGY</h3>

                    </div>
                    <p>Professional Presentation | Individual Interaction | Group Discussions and Activities | Real Life Experiences | 
                        Individual presentations | Outdoor activities | Assignments and research | Questionnaires</p> 

                    </div>
                   
                </li>

                <li>
                <div className="slide1">
                <div className="user1">
                   <img src = {prog2} alt=''/>

                    </div>
                    <div className='use1'>
                        <h3>SERVICES</h3>

                    </div>
                    <p>Team Building | Motivational Talks | Leadership Training & Development | Subjects Facilitation | Consultancy | Mentorship
                       | Organizing Staff Talks | Teachers Training & Workshops | Parental Training Activities | Coperate Dinner and Training</p> 
                </div>
                
                </li>

            </ul>

            <ul>
                <li>
                    <div className="slide1">
                    <div className="user1">
                   <img src = {prog3} alt=''/>

                    </div>
                    <div className='use1'>
                        <h3>AFFILIATIONS</h3>

                    </div>
                    <p> The Impulse Accelerators | Mentor Me | Blaze | Junior Achievement | Pamoja Kenya Mentorship Alliance 
                        | Career Mentorship in Kenya | World Scholars Organization | Tech Robotics Africa | Coding Africa</p> 

                    </div>
                   
                </li>

                <li>
                <div className="slide1">
                <div className="user1">
                   <img src = {prog4} alt=''/>

                    </div>
                    <div className='use1'>
                        <h3>OUR CLIENTS</h3>

                    </div>
                    <p> International Schools | County Schools | National Schools | Universities & Colleges</p> 
                </div>
                
                </li>

            </ul>
            </div>
            </div>

        </div>
    </React.StrictMode>
  )
}

export default Programs

