
import React, { useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-scroll';

const Hero = () => {
    useEffect(()=>{
      AOS.init({
        duration:2000});
  
    },[])



  return (
    <React.StrictMode> 
        <div className='hero' id='hero'  data-aos='zoom'  >
            <div className="htext">
                <h1>World Achievers Organization Africa</h1>
                <p>Who are we? 
                The   WORLD ACHIEVERS MENTORSHIP ORGANIZATION is a 
                registered company seeking to provide professional and social
                mentorship programs to young people in different institutions 
                through diversified skills, technology and professionalism</p>
                <br/>
                <Link to='about' activeClass="active"  spy={true} smooth={true} offset={-1200} duration={500}><button className='btn'>Explore more</button></Link>

            </div>

        </div>

    </React.StrictMode>

  )
}

export default Hero
