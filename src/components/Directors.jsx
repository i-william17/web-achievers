import React, {useEffect} from 'react';
import './Directors.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic1 from '../assets/profile.png';
import pic2 from '../assets/profile.png';
import pic3 from '../assets/profile.png';

const Directors = () => {
    useEffect(()=>{
        AOS.init({
          duration:2000});
    
      },[])

  return (
    <React.StrictMode>
        <div className='dir' data-aos = 'fade-up'>
            <h1>Directors</h1>
         
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                    <div className="user1">
                   <img src = {pic1} alt=''/>

                    </div>
                    <div className='use'>
                        <h3>Shadrack Muturi Katana</h3>
                        <span>Bachelor Degree Finance - Moi University Eldoret | Masters Degree - University of Nairobi</span>

                    </div>
                    <p>Telephone Number: +254 717 789 397 <br/>
                    Mail: shadrack@worldachiversorganization.co.ke</p> 

                    </div>
                   
                </li>

                <li>
                <div className="slide">
                <div className="user1">
                   <img src = {pic2} alt=''/>

                    </div>
                    <div className='use'>
                        <h3>Wilson Ochieng</h3>
                        <span>Bachelor Degree Physiological Counseling - St. Paul University</span>

                    </div>
                    <p>Telephone Number: +254 723 501 603 <br/>
                    Mail: wilson@worldachiversorganization.co.ke</p> 
                </div>
                
                </li>

                <li>
                <div className="slide">
                <div className="user1">
                   <img src = {pic3} alt=''/>

                    </div>
                    <div className='use'>
                        <h3>Sumeiya Salim</h3>
                        <span>Bachelor Degree Education English Literature - Kenyatta University</span>

                    </div>
                    <p>Telephone Number: +254 739 282 815 <br/>
                    Mail: sumeiya@worldachiversorganization.co.ke</p> 
                </div>
                </li>
            </ul>
            </div>
        </div>
    </React.StrictMode>

  )
}

export default Directors
