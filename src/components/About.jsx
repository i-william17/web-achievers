import React, {useEffect} from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import photo1 from '../assets/c.png'
import photo2 from '../assets/a.png'
import photo3 from '../assets/b.png'
import more1 from '../assets/4.jpg'

const About = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000});

  },[])

  return (
    <React.StrictMode>
      <br />
      <br/>

        <div className='about' data-aos='fade-left'>
          <div className='aboutus'>
            <img src={photo1} alt=''></img>
            <div className="caption">
             
            </div>
            <br/>
            <h2>Vision</h2>            
            
            <div>
              <br/>
              <p>To be a hub of inspiration and motivation to young people through 
                mentorship programs, guidance and counseling and by instilling 
                values of Godliness, tolerance and perseverance.</p>
                <br/>
              <p>We are also keen on student leadership boards in each and every 
                institution through mentorship. </p>
                </div>
            
          </div>          

          <div className='aboutus'>
            <img src={photo2} alt=''></img>
            <div className="caption">

            </div>

            <div>
            <br/>
    
              <h2>Mission</h2>
              <br />
              <p>To work in partnership with institutions both private and public to help
              raise ethical, responsible and honest generation.</p>
              <br />
              <p>To MENTOR students leaders in our institutions to ensure proper 
              leadership and balance in thier academics which will go along way 
              even in the cooperate world.</p>
              </div>
            
        
          </div> 

          <div className='aboutus'>
            <img src={photo3} alt=''></img>
            <div className="caption">
              <br/>
              </div>
            
            <div>
            <br/>
              <h2>Core Values</h2>
              <br/>
              <p>
              <p>1. Client satisfaction</p>
              <p>2. Quality Assurance</p> 
              <p>3. Integrity</p>
              <p>4. Teamwork</p>
              <p>5. Respect to people</p>
              <p>6. Accountability</p>

              </p>
            </div>
          </div>

        </div> 
        <br/>
        <br/>

        <div className="more" data-aos='zoom'>
          <div className="mleft">
            <img src={more1} alt='' className='more1'/>


          </div>
          <div className="mright" data-aos='zoom'>
            <br/>
          <h3>Our Objectives</h3>
          <br/>
          <p>
            <p>1. To help the learners become self-reliant. </p>
            <p>2. To inculcate the values of discipline, honesty and hard work. </p>
            <p>3. To help the learners appreciate teamwork. </p>
            <p>4. To help build up leadership and responsibility in children. </p>
            <p>5. To enable them accept themselves for who and what 
            they are.</p>
            </p>
          
          </div>
          <br/>
          <br/>

        </div>
       
    </React.StrictMode>

  )
}

export default About
